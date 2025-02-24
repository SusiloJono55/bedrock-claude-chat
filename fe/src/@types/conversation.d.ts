export type Role = 'system' | 'assistant' | 'user';
export type Model =
  | 'claude-instant-v1'
  | 'claude-v2'
  | 'claude-v3-opus'
  | 'claude-v3-sonnet'
  | 'claude-v3.5-sonnet'
  | 'claude-v3.5-sonnet-v2'
  | 'claude-v3-haiku'
  | 'mistral-7b-instruct'
  | 'mixtral-8x7b-instruct'
  | 'mistral-large';
export type Content = {
  contentType: 'text' | 'image' | 'attachment';
  mediaType?: string;
  fileName?: string;
  body: string;
};

export type UsedChunk = {
  content: string;
  contentType: 's3' | 'url' | 'youtube';
  source: string;
  rank: number;
};

export type AgentToolUseContent = {
  toolUseId: string;
  name: string;
  input: { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type AgentToolResultContent = {
  json_: { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any
  text: string;
};

export type AgentToolResult = {
  toolUseId: string;
  content: AgentToolResultContent;
  status: 'success' | 'error';
};

export type AgentContent = {
  contentType: 'toolUse' | 'toolResult' | 'text';
  body: AgentToolUseContent | AgentToolResult | string;
};

export type AgentMessage = {
  role: string;
  content: AgentContent[];
};

export type MessageContent = {
  role: Role;
  content: Content[];
  model: Model;
  feedback: null | Feedback;
  usedChunks: null | UsedChunk[];
  thinkingLog: null | AgentMessage[];
};

export type RelatedDocument = {
  chunkBody: string;
  contentType: 's3' | 'url' | 'youtube';
  sourceLink: string;
  rank: number;
};

export type DisplayMessageContent = MessageContent & {
  id: string;
  parent: null | string;
  children: string[];
  sibling: string[];
};

export type PostMessageRequest = {
  conversationId?: string;
  message: MessageContent & {
    parentMessageId: null | string;
  };
  botId?: string;
  continueGenerate?: bool;
};

export type PostMessageResponse = {
  conversationId: string;
  createTime: number;
  message: MessageContent;
};

export type GetRelatedDocumentsRequest = {
  conversationId: string;
  message: MessageContent & {
    parentMessageId: null | string;
  };
  botId: string;
};

export type GetRelatedDocumentsResponse = RelatedDocument[] | null;

export type ConversationMeta = {
  id: string;
  title: string;
  createTime: number;
  lastMessageId: string;
  model: Model;
  botId?: string;
};

export type MessageMap = {
  [messageId: string]: MessageContent & {
    children: string[];
    parent: null | string;
  };
};

export type Conversation = ConversationMeta & {
  messageMap: MessageMap;
  shouldContinue: boolean;
};

export type PutFeedbackRequest = {
  thumbsUp: boolean;
  category: null | string;
  comment: null | string;
};

export type Feedback = {
  thumbsUp: boolean;
  category: string;
  comment: string;
};
