import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputText from '../components/InputText';
import Button from '../components/Button';
import useBot from '../hooks/useBot';
import { useNavigate, useParams } from 'react-router-dom';
import { PiCaretLeft, PiNote, PiPlus, PiTrash } from 'react-icons/pi';
import Textarea from '../components/Textarea';
import DialogInstructionsSamples from '../components/DialogInstructionsSamples';
import ButtonIcon from '../components/ButtonIcon';
import { produce } from 'immer';
import Alert from '../components/Alert';
import KnowledgeFileUploader from '../components/KnowledgeFileUploader';
import { BotFile, EmdeddingPrams } from '../@types/bot';
import { ulid } from 'ulid';
import { DEFAULT_EMBEDDING_CONFIG, EDGE_EMBEDDING_PARAMS } from '../constants';
import { Slider } from '../components/Slider';
import ExpandableDrawerGroup from '../components/ExpandableDrawerGroup';
import useErrorMessage from '../hooks/useErrorMessage';

const isSyncChunkError = (syncErrorMessage: string) => {
  const pattern =
    /Got a larger chunk overlap \(\d+\) than chunk size \(\d+\), should be smaller\./;
  return pattern.test(syncErrorMessage);
};

const BotEditPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { botId: paramsBotId } = useParams();
  const { getMyBot, registerBot, updateBot } = useBot();

  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instruction, setInstruction] = useState('');
  const [urls, setUrls] = useState<string[]>(['']);
  const [files, setFiles] = useState<BotFile[]>([]);
  const [embeddingParams, setEmbeddingParams] = useState<EmdeddingPrams>({
    chunkSize: DEFAULT_EMBEDDING_CONFIG.chunkSize,
    chunkOverlap: DEFAULT_EMBEDDING_CONFIG.chunkOverlap,
  });
  const [addedFilenames, setAddedFilenames] = useState<string[]>([]);
  const [unchangedFilenames, setUnchangedFilenames] = useState<string[]>([]);
  const [deletedFilenames, setDeletedFilenames] = useState<string[]>([]);

  const {
    errorMessages,
    setErrorMessage: setErrorMessages,
    clearAll: clearErrorMessages,
  } = useErrorMessage();

  const isNewBot = useMemo(() => {
    return paramsBotId ? false : true;
  }, [paramsBotId]);

  const botId = useMemo(() => {
    return isNewBot ? ulid() : paramsBotId ?? '';
  }, [isNewBot, paramsBotId]);

  const isEnabledEmbeddingParams = useMemo(
    () => !(embeddingParams.chunkSize < embeddingParams.chunkOverlap),
    [embeddingParams]
  );

  useEffect(() => {
    if (!isNewBot) {
      setIsLoading(true);
      getMyBot(botId)
        .then((bot) => {
          setTitle(bot.title);
          setDescription(bot.description);
          setInstruction(bot.instruction);
          setUrls(
            bot.knowledge.sourceUrls.length === 0
              ? ['']
              : bot.knowledge.sourceUrls
          );
          setFiles(
            bot.knowledge.filenames.map((filename) => ({
              filename,
              status: 'UPLOADED',
            }))
          );
          setEmbeddingParams(() => bot.embeddingParams);
          setUnchangedFilenames([...bot.knowledge.filenames]);
          if (bot.syncStatus === 'FAILED') {
            setErrorMessages(
              isSyncChunkError(bot.syncStatusReason)
                ? 'syncChunkError'
                : 'syncError',
              bot.syncStatusReason
            );
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewBot, botId]);

  const onChangeUrl = useCallback(
    (url: string, idx: number) => {
      setUrls(
        produce(urls, (draft) => {
          draft[idx] = url;
        })
      );
    },
    [urls]
  );

  const onClickAddUrl = useCallback(() => {
    setUrls([...urls, '']);
  }, [urls]);

  const onClickRemoveUrl = useCallback(
    (idx: number) => {
      setUrls(
        produce(urls, (draft) => {
          draft.splice(idx, 1);
          if (draft.length === 0) {
            draft.push('');
          }
          return;
        })
      );
    },
    [urls]
  );

  const removeUnchangedFilenames = useCallback(
    (filename: string) => {
      const idx = unchangedFilenames.findIndex(
        (unchangedFilename) => unchangedFilename === filename
      );
      if (idx > -1) {
        setUnchangedFilenames(
          produce(unchangedFilenames, (draft) => {
            draft.splice(idx, 1);
            return;
          })
        );
      }
    },
    [unchangedFilenames]
  );

  const removeAddedFilenames = useCallback(
    (filename: string) => {
      const idx = addedFilenames.findIndex(
        (addedFilename) => addedFilename === filename
      );
      if (idx > -1) {
        setAddedFilenames(
          produce(addedFilenames, (draft) => {
            draft.splice(idx, 1);
            return;
          })
        );
      }
    },
    [addedFilenames]
  );

  const removeDeletedFilenames = useCallback(
    (filename: string) => {
      const idx = deletedFilenames.findIndex(
        (deletedFilename) => deletedFilename === filename
      );
      if (idx > -1) {
        setDeletedFilenames(
          produce(deletedFilenames, (draft) => {
            draft.splice(idx, 1);
          })
        );
      }
    },
    [deletedFilenames]
  );

  const onAddFiles = useCallback(
    (botFiles: BotFile[]) => {
      setFiles(botFiles);
      setAddedFilenames(
        produce(addedFilenames, (draft) => {
          botFiles.forEach((file) => {
            if (file.status === 'UPLOADING') {
              if (!draft.includes(file.filename)) {
                draft.push(file.filename);
              }
              removeUnchangedFilenames(file.filename);
              removeDeletedFilenames(file.filename);
            }
          });
        })
      );
    },
    [addedFilenames, removeDeletedFilenames, removeUnchangedFilenames]
  );

  const onUpdateFiles = useCallback((botFiles: BotFile[]) => {
    setFiles(botFiles);
  }, []);

  const onDeleteFiles = useCallback(
    (botFiles: BotFile[], deletedFilename: string) => {
      setFiles(botFiles);

      if (!deletedFilenames.includes(deletedFilename)) {
        setDeletedFilenames(
          produce(deletedFilenames, (draft) => {
            draft.push(deletedFilename);
          })
        );
      }
      removeAddedFilenames(deletedFilename);
      removeUnchangedFilenames(deletedFilename);
    },
    [deletedFilenames, removeAddedFilenames, removeUnchangedFilenames]
  );

  const onClickBack = useCallback(() => {
    history.back();
  }, []);

  const validationCheck = (): boolean => {
    clearErrorMessages();
    if (embeddingParams.chunkSize > EDGE_EMBEDDING_PARAMS.chunkSize.MAX) {
      setErrorMessages(
        'chunkSize',
        t('validation.maxRange.message', {
          size: EDGE_EMBEDDING_PARAMS.chunkSize.MAX,
        })
      );
      return true;
    }

    if (embeddingParams.chunkOverlap > EDGE_EMBEDDING_PARAMS.chunkOverlap.MAX) {
      setErrorMessages(
        'chunkOverlap',
        t('validation.maxRange.message', {
          size: EDGE_EMBEDDING_PARAMS.chunkOverlap.MAX,
        })
      );
      return true;
    }

    return false;
  };

  const onClickCreate = useCallback(() => {
    if (validationCheck()) return;
    setIsLoading(true);
    registerBot({
      id: botId,
      title,
      description,
      instruction,
      embeddingParams: {
        chunkSize: embeddingParams.chunkSize,
        chunkOverlap: embeddingParams.chunkOverlap,
      },
      knowledge: {
        sourceUrls: urls.filter((s) => s !== ''),
        // Sitemap cannot be used yet.
        sitemapUrls: [],
        filenames: files.map((f) => f.filename),
      },
    })
      .then(() => {
        navigate('/bot/explore');
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [
    registerBot,
    botId,
    title,
    description,
    instruction,
    urls,
    files,
    embeddingParams,
    navigate,
  ]);

  const onClickEdit = useCallback(() => {
    if (validationCheck()) return;

    if (!isNewBot) {
      setIsLoading(true);
      updateBot(botId, {
        title,
        description,
        instruction,
        embeddingParams: {
          chunkSize: embeddingParams.chunkSize,
          chunkOverlap: embeddingParams.chunkOverlap,
        },
        knowledge: {
          sourceUrls: urls.filter((s) => s !== ''),
          // Sitemap cannot be used yet.
          sitemapUrls: [],
          addedFilenames,
          deletedFilenames,
          unchangedFilenames,
        },
      })
        .then(() => {
          navigate('/bot/explore');
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [
    isNewBot,
    updateBot,
    botId,
    title,
    description,
    instruction,
    urls,
    addedFilenames,
    deletedFilenames,
    unchangedFilenames,
    embeddingParams,
    navigate,
  ]);

  const [isOpenSamples, setIsOpenSamples] = useState(false);

  const disabledRegister = useMemo(() => {
    return title === '' || files.findIndex((f) => f.status !== 'UPLOADED') > -1;
  }, [files, title]);

  return (
    <>
      <DialogInstructionsSamples
        isOpen={isOpenSamples}
        onClose={() => {
          setIsOpenSamples(false);
        }}
      />
      <div className="mb-20 flex justify-center">
        <div className="w-2/3">
          <div className="mt-5 w-full">
            <div className="text-xl font-bold">
              {isNewBot ? t('bot.create.pageTitle') : t('bot.edit.pageTitle')}
            </div>

            <div className="mt-3 flex flex-col gap-3">
              <InputText
                label={t('bot.item.title')}
                disabled={isLoading}
                value={title}
                onChange={setTitle}
                hint={t('input.hint.required')}
              />
              <InputText
                label={t('bot.item.description')}
                disabled={isLoading}
                value={description}
                onChange={setDescription}
              />
              <div className="relative mt-3">
                <Button
                  className="absolute -top-3 right-0 text-xs"
                  outlined
                  onClick={() => {
                    setIsOpenSamples(true);
                  }}>
                  <PiNote className="mr-1" />
                  {t('bot.button.instructionsSamples')}
                </Button>
                <Textarea
                  label={t('bot.item.instruction')}
                  disabled={isLoading}
                  rows={5}
                  hint={t('bot.help.instructions')}
                  value={instruction}
                  onChange={setInstruction}
                />
              </div>

              <div className="mt-3">
                <div className="flex items-center gap-1">
                  <div className="text-lg font-bold">
                    {t('bot.label.knowledge')}
                  </div>
                </div>

                <div className="text-sm text-aws-font-color/50">
                  {t('bot.help.knowledge.overview')}
                </div>

                {Object.entries(errorMessages).filter(([key, _value]) =>
                  key.includes('syncError')
                ).length > 0 && (
                  <Alert
                    className="mt-2"
                    severity="error"
                    title={t('bot.alert.sync.error.title')}>
                    <>
                      <div className="mb-1 text-sm text-dark-gray">
                        {t('bot.alert.sync.error.body')}
                      </div>
                      <div className="rounded border bg-light-gray p-2 text-dark-gray">
                        {Object.entries(errorMessages)
                          .filter(([key, _value]) => key.includes('syncError'))
                          .map(([_key, value]) => value)}
                      </div>
                    </>
                  </Alert>
                )}

                <div className="mt-2">
                  <div className="font-semibold">{t('bot.label.url')}</div>
                  <div className="text-sm text-aws-font-color/50">
                    {t('bot.help.knowledge.url')}
                  </div>
                  <div className="mt-2 flex w-full flex-col gap-1">
                    {urls.map((url, idx) => (
                      <div className="flex w-full gap-2" key={idx}>
                        <InputText
                          className="w-full"
                          type="url"
                          disabled={isLoading}
                          value={url}
                          onChange={(s) => {
                            onChangeUrl(s, idx);
                          }}
                        />
                        <ButtonIcon
                          className="text-red"
                          onClick={() => {
                            onClickRemoveUrl(idx);
                          }}>
                          <PiTrash />
                        </ButtonIcon>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <Button outlined icon={<PiPlus />} onClick={onClickAddUrl}>
                      {t('button.add')}
                    </Button>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="font-semibold">{t('bot.label.file')}</div>
                  <div className="text-sm text-aws-font-color/50">
                    {t('bot.help.knowledge.file')}
                  </div>
                  <div className="mt-2 flex w-full flex-col gap-1">
                    <KnowledgeFileUploader
                      className="h-48"
                      botId={botId}
                      files={files}
                      onAdd={onAddFiles}
                      onUpdate={onUpdateFiles}
                      onDelete={onDeleteFiles}
                    />
                  </div>
                </div>
              </div>

              <ExpandableDrawerGroup
                isDefaultShow={false}
                label={t('embeddingSetting.title')}
                className="py-2">
                <div className="font-semibold"></div>
                <div className="text-sm text-aws-font-color/50">
                  {t('bot.help.embeddingParams')}
                </div>
                <div className="mt-2">
                  <Slider
                    value={embeddingParams.chunkSize}
                    description={t('embeddingSetting.chunkSize.description')}
                    title={t('embeddingSetting.chunkSize.label')}
                    range={{
                      min: EDGE_EMBEDDING_PARAMS.chunkSize.MIN,
                      max: EDGE_EMBEDDING_PARAMS.chunkSize.MAX,
                      div: EDGE_EMBEDDING_PARAMS.chunkSize.DIV,
                    }}
                    onChange={(chunkSize) =>
                      setEmbeddingParams((params) => ({
                        ...params,
                        chunkSize: chunkSize,
                      }))
                    }
                    errorMessage={errorMessages['chunkSize']}
                  />

                  <Slider
                    value={embeddingParams.chunkOverlap}
                    description={t('embeddingSetting.chunkOverlap.description')}
                    title={t('embeddingSetting.chunkOverlap.label')}
                    range={{
                      min: EDGE_EMBEDDING_PARAMS.chunkOverlap.MIN,
                      max: EDGE_EMBEDDING_PARAMS.chunkOverlap.MAX,
                      div: EDGE_EMBEDDING_PARAMS.chunkOverlap.DIV,
                    }}
                    onChange={(chunkOverlap) =>
                      setEmbeddingParams((params) => ({
                        ...params,
                        chunkOverlap: chunkOverlap,
                      }))
                    }
                    errorMessage={errorMessages['chunkOverlap']}
                  />
                </div>
              </ExpandableDrawerGroup>

              {!isEnabledEmbeddingParams && (
                <Alert
                  className="mt-2"
                  severity="error"
                  title={t('validation.title')}>
                  <>
                    <div className="rounded border bg-light-gray p-2 text-dark-gray">
                      {t('validation.chunkOverlapLessThanChunkSize.message')}
                    </div>
                  </>
                </Alert>
              )}

              {Object.entries(errorMessages).filter(([key, _value]) =>
                key.includes('syncChunkError')
              ).length > 0 && (
                <Alert
                  className="mt-2"
                  severity="error"
                  title={t('embeddingSetting.alert.sync.error.title')}>
                  <>
                    <div className="rounded border bg-light-gray p-2 text-dark-gray">
                      {t('embeddingSetting.alert.sync.error.body')}
                    </div>
                  </>
                </Alert>
              )}

              <div className="flex justify-between">
                <Button outlined icon={<PiCaretLeft />} onClick={onClickBack}>
                  {t('button.back')}
                </Button>

                {isNewBot ? (
                  <Button
                    onClick={onClickCreate}
                    loading={isLoading}
                    disabled={disabledRegister || !isEnabledEmbeddingParams}>
                    {t('bot.button.create')}
                  </Button>
                ) : (
                  <Button
                    onClick={onClickEdit}
                    loading={isLoading}
                    disabled={disabledRegister || !isEnabledEmbeddingParams}>
                    {t('bot.button.edit')}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotEditPage;
