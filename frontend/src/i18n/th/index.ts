const translation = {
  translation: {
    signIn: {
      button: {
        login: 'เข้าสู่ระบบ',
      },
    },
    app: {
      name: 'Paques Chatbot',
      nameWithoutClaude: 'Paques Chatbot',
      inputMessage: 'ฉันช่วยอะไรคุณได้บ้าง?',
      starredBots: 'บ็อตที่ถูกใจ',
      recentlyUsedBots: 'บ็อตที่ใช้งานล่าสุด',
      conversationHistory: 'ประวัติ',
      chatWaitingSymbol: '▍',
      adminConsoles: 'สำหรับผู้ดูแลเท่านั้น',
    },
    model: {
      haiku3: {
        label: 'Claude 3 (Haiku)',
        description:
          'รุ่นก่อนหน้าที่ปรับแต่งเพื่อความเร็วและความกระชับ ให้การตอบสนองเกือบทันที',
      },
      sonnet3: {
        label: 'Claude 3 (Sonnet)',
        description: 'สมดุลของปัญญาและความเร็ว',
      },
      'sonnet3-5': {
        label: 'Claude 3.5 (Sonnet) v1',
        description:
          'เวอร์ชันก่อนหน้าของ Claude 3.5 รองรับงานที่หลากหลาย แต่ v2 ให้ความแม่นยำที่ดีขึ้น',
      },
      'sonnet3-5-v2': {
        label: 'Claude 3.5 (Sonnet) v2',
        description:
          'รุ่นล่าสุดของ Claude 3.5 รุ่นที่พัฒนาขึ้นจาก v1 ด้วยความแม่นยำและประสิทธิภาพที่สูงขึ้น',
      },
      'haiku3-5': {
        label: 'Claude 3.5 (Haiku)',
        description:
          'รุ่นล่าสุด ให้การตอบสนองที่รวดเร็วยิ่งขึ้นและความสามารถที่ปรับปรุงจาก Haiku 3',
      },
      opus3: {
        label: 'Claude 3 (Opus)',
        description: 'โมเดลที่ทรงพลังสำหรับงานที่ซับซ้อนสูง',
      },
      mistral7b: {
        label: 'Mistral 7B',
      },
      mistral8x7b: {
        label: 'Mixtral-8x7B',
      },
      mistralLarge: {
        label: 'Mistral ขนาดใหญ่',
      },
      novaPro: {
        label: 'Amazon Nova Pro',
        description:
          'โมเดลแบบมัลติมีเดียที่มีความสามารถสูงที่สุดในด้านความแม่นยำ ความเร็ว และต้นทุนสำหรับงานที่หลากหลาย',
      },
      novaLite: {
        label: 'Amazon Nova Lite',
        description:
          'โมเดลมัลติมีเดียที่มีต้นทุนต่ำมากและประมวลผลภาพ วิดีโอ และข้อความได้อย่างรวดเร็ว',
      },
      novaMicro: {
        label: 'Amazon Nova Micro',
        description:
          'โมเดลที่รองรับข้อความเท่านั้น ให้การตอบสนองที่มีความหน่วงต่ำที่สุดในกลุ่มโมเดล Amazon Nova ด้วยต้นทุนที่ต่ำมาก',
      },
    },
    agent: {
      label: 'เอเจนต์',
      help: {
        overview:
          'โดยการใช้ฟังก์ชันเอเจนต์ แชทบอทของคุณสามารถจัดการกับงานที่ซับซ้อนมากขึ้นได้โดยอัตโนมัติ',
      },
      hint: `เอเจนต์จะกำหนดเครื่องมือที่จะใช้เพื่อตอบคำถามของผู้ใช้โดยอัตโนมัติ เนื่องจากเวลาที่ใช้ในการตัดสินใจ เวลาการตอบสนองมักจะนานกว่า การเปิดใช้งานเครื่องมือหนึ่งหรือมากกว่าจะเปิดใช้ฟังก์ชันของเอเจนต์ ในทางกลับกัน หากไม่มีการเลือกเครื่องมือ ฟังก์ชันของเอเจนต์จะไม่ถูกใช้ เมื่อเปิดใช้ฟังก์ชันของเอเจนต์ การใช้ "ความรู้" ก็ถือเป็นหนึ่งในเครื่องมือด้วย นั่นหมายความว่า "ความรู้" อาจไม่ได้ใช้ในการตอบสนอง`,
      progress: {
        label: 'กำลังคิด...',
      },
      progressCard: {
        toolInput: 'อินพุต: ',
        toolOutput: 'เอาท์พุต: ',
        status: {
          running: 'กำลังทำงาน...',
          success: 'สำเร็จ',
          error: 'ข้อผิดพลาด',
        },
      },
      tools: {
        get_weather: {
          name: 'สภาพอากาศปัจจุบัน',
          description: 'ดึงข้อมูลพยากรณ์อากาศปัจจุบัน',
        },
        sql_db_query: {
          name: 'การสอบถามฐานข้อมูล',
          description:
            'ดำเนินการสอบถาม SQL ที่ละเอียดและถูกต้องเพื่อดึงผลลัพธ์จากฐานข้อมูล',
        },
        sql_db_schema: {
          name: 'โครงสร้างฐานข้อมูล',
          description: 'ดึงโครงสร้างและตัวอย่างแถวสำหรับรายการตาราง',
        },
        sql_db_list_tables: {
          name: 'รายการตารางฐานข้อมูล',
          description: 'แสดงรายการตารางทั้งหมดที่มีอยู่ในฐานข้อมูล',
        },
        sql_db_query_checker: {
          name: 'ตัวตรวจสอบการสอบถาม',
          description: 'ตรวจสอบว่าการสอบถาม SQL ของคุณถูกต้องก่อนดำเนินการ',
        },
        internet_search: {
          name: 'การค้นหาอินเทอร์เน็ต',
          description: 'ค้นหาข้อมูลจากอินเทอร์เน็ต',
        },
        knowledge_base_tool: {
          name: 'ดึงข้อมูลความรู้',
          description: 'ดึงข้อมูลจากความรู้',
        },
      },
    },
    bot: {
      label: {
        myBots: 'บ็อตของฉัน',
        recentlyUsedBots: 'บ็อตที่ใช้งานร่วมกันล่าสุด',
        knowledge: 'ความรู้',
        url: 'URL',
        s3url: 'แหล่งข้อมูล S3',
        sitemap: 'URL แผนผังเว็บไซต์',
        file: 'ไฟล์',
        loadingBot: 'กำลังโหลด...',
        normalChat: 'แชท',
        notAvailableBot: '[ไม่พร้อมใช้งาน]',
        notAvailableBotInputMessage: 'บ็อตนี้ยังไม่พร้อมใช้งาน',
        noDescription: 'ไม่มีคำอธิบาย',
        notAvailable: 'บ็อตนี้ยังไม่พร้อมใช้งาน',
        noBots: 'ไม่มีบ็อต',
        noBotsRecentlyUsed: 'ไม่มีบ็อตที่ใช้งานร่วมกันล่าสุด',
        retrievingKnowledge: '[กำลังดึงข้อมูลความรู้...]',
        selectParsingModel: 'เลือกโมเดลการวิเคราะห์',
        dndFileUpload:
          'คุณสามารถอัปโหลดไฟล์โดยการลากและวาง.\nไฟล์ที่รองรับ: {{fileExtensions}}',
        uploadError: 'ข้อความข้อผิดพลาด',
        referenceLink: 'ลิงก์อ้างอิง',
        syncStatus: {
          queue: 'รอการซิงค์',
          running: 'กำลังซิงค์',
          success: 'การซิงค์เสร็จสมบูรณ์',
          fail: 'การซิงค์ล้มเหลว',
        },
        fileUploadStatus: {
          uploading: 'กำลังอัปโหลด...',
          uploaded: 'อัปโหลดแล้ว',
          error: 'ข้อผิดพลาด',
        },
        quickStarter: {
          title: 'เริ่มต้นการสนทนาอย่างรวดเร็ว',
          exampleTitle: 'หัวข้อ',
          example: 'ตัวอย่างการสนทนา',
        },
        citeRetrievedContexts: 'การอ้างอิงบริบทที่ดึงมา',
        unsupported: 'ไม่รองรับ, อ่านอย่างเดียว',
      },
      titleSubmenu: {
        edit: 'แก้ไข',
        copyLink: 'คัดลอกลิงก์',
        copiedLink: 'คัดลอกแล้ว',
      },
      help: {
        overview:
          'บ็อตทำงานตามคำแนะนำที่กำหนดไว้ล่วงหน้า การแชทจะไม่ทำงานตามที่คาดหวังหากไม่ได้กำหนดบริบทในข้อความ แต่กับบ็อต ไม่จำเป็นต้องกำหนดบริบท',
        instructions:
          'กำหนดวิธีที่บ็อตควรทำงาน การให้คำแนะนำที่คลุมเครืออาจนำไปสู่การเคลื่อนไหวที่ไม่คาดคิด ดังนั้นให้คำแนะนำที่ชัดเจนและเฉพาะเจาะจง',
        knowledge: {
          overview:
            'โดยการให้ความรู้ภายนอกกับบ็อต บ็อตจะสามารถจัดการกับข้อมูลที่ไม่ได้ถูกฝึกมาให้ล่วงหน้า',
          url: 'ข้อมูลจาก URL ที่ระบุจะถูกใช้เป็นความรู้',
          s3url:
            'โดยการป้อน S3 URI คุณสามารถเพิ่ม S3 เป็นแหล่งข้อมูลได้ คุณสามารถเพิ่มได้สูงสุด 4 แหล่งข้อมูล รองรับเฉพาะบัคเก็ตที่อยู่ในบัญชีเดียวกันและภูมิภาคเดียวกับภูมิภาค bedrock',
          sitemap:
            'โดยการระบุ URL ของแผนผังเว็บไซต์ ข้อมูลที่ได้จากการสแคร็ปเว็บไซต์โดยอัตโนมัติภายในแผนผังจะถูกใช้เป็นความรู้',
          file: 'ไฟล์ที่อัปโหลดจะถูกใช้เป็นความรู้',
          citeRetrievedContexts:
            'กำหนดค่าการแสดงบริบทที่ดึงมาเพื่อตอบคำถามของผู้ใช้เป็นข้อมูลการอ้างอิง\nหากเปิดใช้งาน ผู้ใช้สามารถเข้าถึง URL หรือไฟล์ต้นทางได้',
        },
        quickStarter: {
          overview:
            'เมื่อเริ่มต้นการสนทนา ให้ตัวอย่าง ตัวอย่างช่วยแสดงวิธีการใช้บ็อต',
        },
      },
      alert: {
        sync: {
          error: {
            title: 'ข้อผิดพลาดในการซิงค์ความรู้',
            body: 'เกิดข้อผิดพลาดขณะซิงค์ความรู้ กรุณาตรวจสอบข้อความต่อไปนี้:',
          },
          incomplete: {
            title: 'ยังไม่พร้อมใช้งาน',
            body: 'บ็อตนี้ยังไม่เสร็จสิ้นการซิงค์ความรู้ ดังนั้นความรู้ก่อนการอัปเดตจะถูกใช้',
          },
        },
      },
      samples: {
        title: 'ตัวอย่างคำแนะนำ',
        anthropicLibrary: {
          title: 'ห้องสมุดคำแนะนำ Anthropic',
          sentence: 'ต้องการตัวอย่างเพิ่มเติมหรือไม่? เยี่ยมชม: ',
          url: 'https://docs.anthropic.com/claude/prompt-library',
        },
        pythonCodeAssistant: {
          title: 'ผู้ช่วยเขียนโค้ด Python',
          prompt: `เขียนสคริปต์ Python สั้น ๆ และมีคุณภาพสูงสำหรับงานที่กำหนด เป็นสิ่งที่ผู้เชี่ยวชาญ Python ที่มีทักษะสูงจะเขียน คุณกำลังเขียนโค้ดสำหรับนักพัฒนาที่มีประสบการณ์ ดังนั้นให้เพิ่มเฉพาะความคิดเห็นสำหรับสิ่งที่ไม่ชัดเจนเท่านั้น ให้แน่ใจว่าได้รวมการนำเข้าใด ๆ ที่จำเป็น 
    ห้ามเขียนอะไรก่อนบล็อก \`\`\`python\`\`\` หลังจากที่คุณสร้างโค้ดเสร็จและหลังบล็อก \`\`\`python\`\`\` ให้ตรวจสอบงานของคุณอย่างละเอียดเพื่อให้แน่ใจว่าไม่มีข้อผิดพลาด ความผิดพลาด หรือความไม่สอดคล้อง หากมีข้อผิดพลาด ให้ระบุข้อผิดพลาดเหล่านั้นในแท็ก <error> จากนั้นสร้างเวอร์ชันใหม่โดยแก้ไขข้อผิดพลาดเหล่านั้น หากไม่มีข้อผิดพลาด ให้เขียน "ตรวจสอบแล้ว: ไม่มีข้อผิดพลาด" ในแท็ก <error>`,
        },
        mailCategorizer: {
          title: 'ผู้จัดประเภทจดหมาย',
          prompt: `คุณเป็นเจ้าหน้าที่บริการลูกค้าที่รับผิดชอบในการจัดประเภทอีเมลตามประเภท กรุณาแสดงคำตอบของคุณ จากนั้นให้เหตุผลในการจัดประเภท

    หมวดหมู่การจัดประเภทคือ: 
    (A) คำถามก่อนการขาย 
    (B) สินค้าที่เสียหายหรือชำรุด 
    (C) คำถามเกี่ยวกับการเรียกเก็บเงิน 
    (D) อื่น ๆ (โปรดอธิบาย)
    
    คุณจะจัดประเภทอีเมลนี้อย่างไร?`,
        },
        fitnessCoach: {
          title: 'โค้ชฟิตเนสส่วนบุคคล',
          prompt: `คุณคือโค้ชฟิตเนสส่วนบุคคลที่มีความกระตือรือร้นและเป็นมิตรชื่อแซม แซมหลงใหลในการช่วยลูกค้าให้ฟิตและมีชีวิตที่มีสุขภาพดีขึ้น คุณเขียนด้วยน้ำเสียงที่ให้กำลังใจและเป็นมิตรเสมอ และพยายามนำทางลูกค้าไปสู่เป้าหมายฟิตเนสที่ดีกว่า หากผู้ใช้ถามคำถามที่ไม่เกี่ยวกับฟิตเนส ให้เปลี่ยนหัวข้อกลับไปที่ฟิตเนส หรือบอกว่าคุณไม่สามารถตอบได้`,
        },
      },
      create: {
        pageTitle: 'สร้างบ็อตของฉัน',
      },
      edit: {
        pageTitle: 'แก้ไขบ็อตของฉัน',
      },

      item: {
        title: 'ชื่อ',
        description: 'คำอธิบาย',
        instruction: 'คำแนะนำ',
      },
      explore: {
        label: {
          pageTitle: 'คอนโซลบ็อต',
        },
      },
      apiSettings: {
        pageTitle: 'ตั้งค่า API การเผยแพร่บ็อตที่แชร์',
        label: {
          endpoint: 'จุดสิ้นสุด API',
          usagePlan: 'แผนการใช้งาน',
          allowOrigins: 'แหล่งที่มาที่อนุญาต',
          apiKeys: 'กุญแจ API',
          period: {
            day: 'ต่อวัน',
            week: 'ต่อสัปดาห์',
            month: 'ต่อเดือน',
          },
          apiKeyDetail: {
            creationDate: 'วันที่สร้าง',
            active: 'ใช้งาน',
            inactive: 'ไม่ใช้งาน',
            key: 'กุญแจ API',
          },
        },
        item: {
          throttling: 'การจำกัดอัตรา',
          burstLimit: 'การพุ่ง',
          rateLimit: 'การจำกัดอัตรา',
          quota: 'โควต้า',
          requestLimit: 'คำขอ',
          offset: 'ออฟเซ็ต',
        },
        help: {
          overview:
            'การสร้าง API ช่วยให้ฟังก์ชันของบ็อตสามารถเข้าถึงได้โดยลูกค้าภายนอก; APIs ช่วยให้การรวมกับแอปพลิเคชันภายนอกเป็นไปได้',
          endpoint: 'ลูกค้าสามารถใช้บ็อตจากจุดสิ้นสุดนี้',
          usagePlan:
            'แผนการใช้งานระบุจำนวนหรืออัตราการร้องขอที่ API ของคุณยอมรับจากลูกค้า เชื่อมโยง API กับแผนการใช้งานเพื่อติดตามการร้องขอที่ API ของคุณได้รับ',
          throttling: 'จำกัดอัตราที่ผู้ใช้สามารถเรียกใช้ API ของคุณได้',
          rateLimit:
            'ป้อนอัตรา ในคำขอแต่ละวินาทีที่ลูกค้าสามารถเรียกใช้ API ของคุณได้',
          burstLimit: 'ป้อนจำนวนคำขอพร้อมกันที่ลูกค้าสามารถทำได้ต่อ API ของคุณ',
          quota:
            'เปิดใช้งานโควต้าเพื่อลิมิตจำนวนคำขอที่ผู้ใช้สามารถทำได้ต่อ API ในช่วงเวลาที่กำหนด',
          requestLimit:
            'ป้อนจำนวนคำขอทั้งหมดที่ผู้ใช้สามารถทำได้ในช่วงเวลาที่คุณเลือกในรายการแบบเลื่อนลง',
          allowOrigins:
            'แหล่งที่มาของลูกค้าที่อนุญาตสำหรับการเข้าถึง หากแหล่งที่มาไม่ได้รับอนุญาต ผู้เรียกจะได้รับการตอบสนอง 403 Forbidden และถูกปฏิเสธการเข้าถึง API แหล่งที่มาจะต้องเป็นไปตามรูปแบบ: "(http|https)://host-name" หรือ "(http|https)://host-name:port" และสามารถใช้ wildcard(*) ได้',
          allowOriginsExample:
            'เช่น https://your-host-name.com, https://*.your-host-name.com, http://localhost:8000',
          apiKeys:
            'กุญแจ API คือสตริงอักขระที่ใช้ระบุไคลเอนต์ของ API ของคุณ มิฉะนั้น ผู้เรียกจะได้รับการตอบสนอง 403 Forbidden และถูกปฏิเสธการเข้าถึง API',
        },
        button: {
          ApiKeyShow: 'แสดง',
          ApiKeyHide: 'ซ่อน',
        },
        alert: {
          botUnshared: {
            title: 'กรุณาแชร์บ็อต',
            body: 'คุณไม่สามารถเผยแพร่ API สำหรับบ็อตที่ไม่ได้แชร์',
          },
          deploying: {
            title: 'การปรับใช้ API กำลังดำเนินอยู่',
            body: 'กรุณารอจนกว่าการปรับใช้จะเสร็จสมบูรณ์',
          },
          deployed: {
            title: 'API ได้ถูกเผยแพร่แล้ว',
            body: 'คุณสามารถเข้าถึง API จากไคลเอนต์โดยใช้จุดสิ้นสุด API และกุญแจ API',
          },
          deployError: {
            title: 'การเผยแพร่ API ล้มเหลว',
            body: 'กรุณาลบ API และสร้าง API ใหม่อีกครั้ง',
          },
        },
        deleteApiDaialog: {
          title: 'ลบ?',
          content:
            'คุณแน่ใจหรือไม่ที่จะลบ API? จุดสิ้นสุด API จะถูกลบ และไคลเอนต์จะไม่สามารถเข้าถึงได้อีกต่อไป',
        },
        addApiKeyDialog: {
          title: 'เพิ่มกุญแจ API',
          content: 'ป้อนชื่อเพื่อระบุกุญแจ API',
        },
        deleteApiKeyDialog: {
          title: 'ลบ?',
          content:
            'คุณแน่ใจหรือไม่ที่จะลบ <Bold>{{title}}</Bold>?\nไคลเอนต์ที่ใช้กุญแจ API นี้จะถูกปฏิเสธการเข้าถึง API',
        },
      },
      button: {
        newBot: 'สร้างบ็อตใหม่',
        create: 'สร้าง',
        edit: 'แก้ไข',
        delete: 'ลบ',
        share: 'แชร์',
        apiSettings: 'ตั้งค่าเผยแพร่ API',
        copy: 'คัดลอก',
        copied: 'คัดลอกแล้ว',
        instructionsSamples: 'ตัวอย่าง',
        chooseFiles: 'เลือกไฟล์',
      },
      deleteDialog: {
        title: 'ลบ?',
        content: 'คุณแน่ใจหรือไม่ที่จะลบ <Bold>{{title}}</Bold>?',
      },
      shareDialog: {
        title: 'แชร์',
        off: {
          content:
            'การแชร์ลิงก์ถูกปิดใช้งาน ดังนั้นเฉพาะคุณเท่านั้นที่จะสามารถเข้าถึงบ็อตนี้ผ่าน URL ได้',
        },
        on: {
          content:
            'การแชร์ลิงก์เปิดใช้งาน ดังนั้นผู้ใช้ทุกคนสามารถใช้ลิงก์นี้เพื่อสนทนาได้',
        },
      },
      error: {
        notSupportedFile: 'ไฟล์นี้ไม่รองรับ',
        duplicatedFile: 'มีไฟล์ที่มีชื่อเดียวกันถูกอัปโหลดแล้ว',
        failDeleteApi: 'ลบ API ล้มเหลว',
      },
    },
    admin: {
      sharedBotAnalytics: {
        label: {
          pageTitle: 'การวิเคราะห์บ็อตที่แชร์',
          noPublicBotUsages: 'ในช่วงเวลาการคำนวณ ไม่มีการใช้งานบ็อตสาธารณะ',
          published: 'API ได้ถูกเผยแพร่แล้ว',
          SearchCondition: {
            title: 'ช่วงเวลาการคำนวณ',
            from: 'จาก',
            to: 'ถึง',
          },
          sortByCost: 'เรียงตามค่าใช้จ่าย',
        },
        help: {
          overview:
            'ติดตามสถานะการใช้งานของบ็อตที่แชร์และ APIs ของบ็อตที่เผยแพร่',
          calculationPeriod:
            'หากไม่ได้ตั้งค่าช่วงเวลาการคำนวณ จะแสดงค่าใช้จ่ายสำหรับวันนี้',
        },
      },
      apiManagement: {
        label: {
          pageTitle: 'การจัดการ API',
          publishedDate: 'วันที่เผยแพร่',
          noApi: 'ไม่มี API',
        },
      },
      botManagement: {
        label: {
          pageTitle: 'การจัดการบ็อต',
          sharedUrl: 'URL บ็อตที่แชร์',
          apiSettings: 'ตั้งค่าเผยแพร่ API',
          noKnowledge: 'บ็อตนี้ไม่มีความรู้',
          notPublishApi: 'API ของบ็อตนี้ไม่ได้ถูกเผยแพร่',
          deployStatus: 'สถานะการปรับใช้',
          cfnStatus: 'สถานะ CloudFormation',
          codebuildStatus: 'สถานะ CodeBuild',
          codeBuildId: 'รหัส CodeBuild',
          usagePlanOn: 'เปิดใช้งาน',
          usagePlanOff: 'ปิดใช้งาน',
          rateLimit:
            '<Bold>{{limit}}</Bold> คำขอต่อวินาทีที่ลูกค้าสามารถเรียกใช้ API ได้',
          burstLimit:
            'ลูกค้าสามารถทำคำขอพร้อมกัน <Bold>{{limit}}</Bold> ครั้งต่อ API',
          requestsLimit:
            'คุณสามารถทำคำขอได้ <Bold>{{limit}}</Bold> ครั้งใน <Bold>{{period}}</Bold>',
        },
        alert: {
          noApiKeys: {
            title: 'ไม่มีกุญแจ API',
            body: 'ลูกค้าทุกคนไม่สามารถเข้าถึง API ได้',
          },
        },
        button: {
          deleteApi: 'ลบ API',
        },
      },
      validationError: {
        period: 'กรุณาป้อนทั้ง จาก และ ถึง',
      },
    },
    deleteDialog: {
      title: 'ลบ?',
      content: 'คุณแน่ใจหรือไม่ที่จะลบ <Bold>{{title}}</Bold>?',
    },
    clearDialog: {
      title: 'ลบทั้งหมด?',
      content: 'คุณแน่ใจหรือไม่ที่จะลบการสนทนาทั้งหมด?',
    },
    languageDialog: {
      title: 'เปลี่ยนภาษา',
    },
    feedbackDialog: {
      title: 'ข้อเสนอแนะ',
      content: 'กรุณาให้รายละเอียดเพิ่มเติม',
      categoryLabel: 'หมวดหมู่',
      commentLabel: 'ความคิดเห็น',
      commentPlaceholder: '(ไม่บังคับ) ป้อนความคิดเห็นของคุณ',
      categories: [
        {
          value: 'notFactuallyCorrect',
          label: 'ไม่ถูกต้องตามข้อเท็จจริง',
        },
        {
          value: 'notFullyFollowRequest',
          label: 'ไม่ปฏิบัติตามคำขออย่างเต็มที่',
        },
        {
          value: 'other',
          label: 'อื่น ๆ',
        },
      ],
    },
    button: {
      newChat: 'แชทใหม่',
      botConsole: 'คอนโซลบ็อต',
      sharedBotAnalytics: 'การวิเคราะห์บ็อตที่แชร์',
      apiManagement: 'การจัดการ API',
      userUsages: 'การใช้งานของผู้ใช้',
      SaveAndSubmit: 'บันทึก & ส่ง',
      resend: 'ส่งใหม่',
      regenerate: 'สร้างใหม่',
      delete: 'ลบ',
      deleteAll: 'ลบทั้งหมด',
      done: 'เสร็จสิ้น',
      ok: 'ตกลง',
      cancel: 'ยกเลิก',
      back: 'กลับ',
      menu: 'เมนู',
      language: 'ภาษา',
      clearConversation: 'ลบการสนทนาทั้งหมด',
      signOut: 'ออกจากระบบ',
      close: 'ปิด',
      add: 'เพิ่ม',
      continue: 'ดำเนินการสร้าง',
    },
    input: {
      hint: {
        required: '* จำเป็น',
      },
      validationError: {
        required: 'ช่องนี้จำเป็นต้องกรอก',
        invalidOriginFormat: 'รูปแบบต้นทางไม่ถูกต้อง',
      },
    },
    embeddingSettings: {
      title: 'การตั้งค่าการฝังข้อมูล',
      description:
        'คุณสามารถกำหนดค่าพารามิเตอร์สำหรับการฝังเวกเตอร์ โดยการปรับแต่งพารามิเตอร์ คุณสามารถเปลี่ยนความแม่นยำในการค้นหาข้อมูลเอกสาร',
      chunkSize: {
        label: 'ขนาดชิ้นส่วน',
        hint: 'ขนาดชิ้นส่วนหมายถึงขนาดที่เอกสารถูกแบ่งออกเป็นส่วนย่อย ๆ',
      },
      chunkOverlap: {
        label: 'การทับซ้อนของชิ้นส่วน',
        hint: 'คุณสามารถระบุจำนวนอักขระที่ทับซ้อนกันระหว่างชิ้นส่วนที่ติดกัน',
      },
      enablePartitionPdf: {
        label:
          'เปิดใช้งานการวิเคราะห์ PDF รายละเอียด หากเปิดใช้งาน PDF จะถูกวิเคราะห์อย่างละเอียดเมื่อเวลาผ่านไป',
        hint: 'มีประโยชน์เมื่อคุณต้องการปรับปรุงความแม่นยำในการค้นหา ต้นทุนการคำนวณเพิ่มขึ้นเนื่องจากการคำนวณใช้เวลามากขึ้น',
      },
      help: {
        chunkSize:
          'เมื่อขนาดชิ้นส่วนเล็กเกินไป ข้อมูลเชิงบริบทอาจสูญหาย และเมื่อขนาดใหญ่เกินไป ข้อมูลเชิงบริบทที่แตกต่างกันอาจมีอยู่ภายในชิ้นส่วนเดียวกัน ซึ่งอาจลดความแม่นยำในการค้นหา',
        chunkOverlap:
          'โดยการระบุการทับซ้อนของชิ้นส่วน คุณสามารถรักษาข้อมูลเชิงบริบทรอบขอบเขตของชิ้นส่วนที่ทับซ้อนกัน การเพิ่มขนาดชิ้นส่วนสามารถปรับปรุงความแม่นยำในการค้นหาได้ในบางครั้ง อย่างไรก็ตาม ต้องระวังว่าการเพิ่มการทับซ้อนของชิ้นส่วนอาจนำไปสู่ต้นทุนการคำนวณที่สูงขึ้น',
        overlapTokens:
          'คุณกำหนดจำนวนโทเค็นที่จะทับซ้อน หรือทำซ้ำระหว่างชิ้นส่วนที่ติดกันในชั้นเดียวกัน ตัวอย่างเช่น หากคุณตั้งค่า overlap tokens เป็น 60 โทเค็นสุดท้ายในชิ้นส่วนแรกจะถูกนำมาใช้ที่ต้นของชิ้นส่วนที่สอง',
        maxParentTokenSize:
          'คุณสามารถกำหนดขนาดโทเค็นแม่ที่มากที่สุดได้ ในระหว่างการดึงข้อมูล ระบบจะดึงข้อมูลชิ้นส่วนย่อยก่อน แต่จะแทนที่ด้วยชิ้นส่วนแม่ที่กว้างขึ้นเพื่อให้โมเดลมีบริบทที่ครอบคลุมมากขึ้น',
        maxChildTokenSize:
          'คุณสามารถกำหนดขนาดโทเค็นลูกที่มากที่สุดได้ ในระหว่างการดึงข้อมูล ระบบจะดึงข้อมูลชิ้นส่วนลูกก่อน แต่จะแทนที่ด้วยชิ้นส่วนแม่ที่กว้างขึ้นเพื่อให้โมเดลมีบริบทที่ครอบคลุมมากขึ้น',
        bufferSize:
          'พารามิเตอร์นี้สามารถมีผลต่อปริมาณข้อความที่ถูกตรวจสอบพร้อมกันเพื่อกำหนดขอบเขตของแต่ละชิ้นส่วน ซึ่งส่งผลต่อความละเอียดและความสอดคล้องของชิ้นส่วนที่เกิดขึ้น ขนาดบัฟเฟอร์ที่ใหญ่ขึ้นอาจจับบริบทได้มากขึ้นแต่ก็อาจเพิ่มสัญญาณรบกวน ในขณะที่ขนาดบัฟเฟอร์ที่เล็กลงอาจพลาดบริบทที่สำคัญ แต่ทำให้การแบ่งชิ้นส่วนมีความแม่นยำมากขึ้น',
        breakpointPercentileThreshold:
          'เกณฑ์เปอร์เซ็นไทล์ของจุดพักต้องการให้ประโยคมีความแตกต่างชัดเจนยิ่งขึ้นเพื่อแบ่งออกเป็นชิ้นส่วนที่แตกต่างกัน เกณฑ์ที่สูงกว่าจะส่งผลให้มีชิ้นส่วนที่น้อยลงและขนาดชิ้นส่วนเฉลี่ยที่ใหญ่ขึ้นโดยปกติ',
      },
      alert: {
        sync: {
          error: {
            title: 'ข้อผิดพลาดในการแยกประโยค',
            body: 'ลองอีกครั้งด้วยค่าการทับซ้อนของชิ้นส่วนที่น้อยลง',
          },
        },
      },
    },
    generationConfig: {
      title: 'การตั้งค่าการสร้าง',
      description:
        'คุณสามารถกำหนดค่าพารามิเตอร์การเรียกใช้ LLM เพื่อควบคุมการตอบสนองจากโมเดล',
      maxTokens: {
        label: 'ความยาวการสร้างสูงสุด/โทเค็นใหม่สูงสุด',
        hint: 'จำนวนโทเค็นสูงสุดที่อนุญาตในคำตอบที่สร้างขึ้น',
      },
      temperature: {
        label: 'อุณหภูมิ',
        hint: 'ส่งผลต่อรูปทรงของการแจกแจงความน่าจะเป็นสำหรับผลลัพธ์ที่ทำนายและมีอิทธิพลต่อความน่าจะเป็นที่โมเดลจะเลือกผลลัพธ์ที่มีความน่าจะเป็นต่ำกว่า',
        help: 'เลือกค่าต่ำเพื่อลดอิทธิพลที่โมเดลจะเลือกผลลัพธ์ที่มีความน่าจะเป็นสูงขึ้น; เลือกค่าสูงเพื่อเพิ่มอิทธิพลที่โมเดลจะเลือกผลลัพธ์ที่มีความน่าจะเป็นต่ำกว่า',
      },
      topK: {
        label: 'Top-k',
        hint: 'จำนวนตัวเลือกที่มีความน่าจะเป็นสูงสุดที่โมเดลพิจารณาสำหรับโทเค็นถัดไป',
        help: 'เลือกค่าต่ำเพื่อลดขนาดของกลุ่มและจำกัดตัวเลือกให้เป็นผลลัพธ์ที่มีความน่าจะเป็นมากกว่า; เลือกค่าสูงเพื่อเพิ่มขนาดของกลุ่มและอนุญาตให้โมเดลพิจารณาผลลัพธ์ที่มีความน่าจะเป็นน้อยกว่า',
      },
      topP: {
        label: 'Top-p',
        hint: 'เปอร์เซ็นต์ของตัวเลือกที่มีความน่าจะเป็นสูงสุดที่โมเดลพิจารณาสำหรับโทเค็นถัดไป',
        help: 'เลือกค่าต่ำเพื่อลดขนาดของกลุ่มและจำกัดตัวเลือกให้เป็นผลลัพธ์ที่มีความน่าจะเป็นมากกว่า; เลือกค่าสูงเพื่อเพิ่มขนาดของกลุ่มและอนุญาตให้โมเดลพิจารณาผลลัพธ์ที่มีความน่าจะเป็นน้อยกว่า',
      },
      stopSequences: {
        label: 'โทเค็นสิ้นสุด/ลำดับสิ้นสุด',
        hint: 'ระบุลำดับของอักขระที่หยุดโมเดลจากการสร้างโทเค็นเพิ่มเติม ใช้เครื่องหมายจุลภาคเพื่อแยกคำหลายคำ',
      },
    },
    searchSettings: {
      title: 'การตั้งค่าการค้นหา',
      description:
        'คุณสามารถกำหนดค่าพารามิเตอร์การค้นหาเพื่อดึงเอกสารที่เกี่ยวข้องจากเวกเตอร์สโตร์',
      maxResults: {
        label: 'ผลลัพธ์สูงสุด',
        hint: 'จำนวนสูงสุดของบันทึกที่ดึงจากเวกเตอร์สโตร์',
      },
      searchType: {
        label: 'ประเภทการค้นหา',
        hybrid: {
          label: 'การค้นหาแบบผสม',
          hint: 'ผสมคะแนนความเกี่ยวข้องจากการค้นหาด้วยข้อความและการค้นหาด้วยความหมายเพื่อให้ความแม่นยำที่ดียิ่งขึ้น',
        },
        semantic: {
          label: 'การค้นหาด้วยความหมาย',
          hint: 'ใช้การฝังเวกเตอร์เพื่อให้ผลลัพธ์ที่เกี่ยวข้อง',
        },
      },
    },
    knowledgeBaseSettings: {
      title: 'การตั้งค่ารายละเอียดความรู้',
      description:
        'เลือกโมเดลการฝังสำหรับการกำหนดค่าความรู้ และตั้งค่าวิธีการแบ่งเอกสารที่เพิ่มเป็นความรู้ การตั้งค่าเหล่านี้ไม่สามารถเปลี่ยนแปลงได้หลังจากสร้างบ็อต',
      embeddingModel: {
        label: 'โมเดลการฝังข้อมูล',
        titan_v2: {
          label: 'Titan Embedding Text v2',
        },
        cohere_multilingual_v3: {
          label: 'Embed Multilingual v3',
        },
      },
      chunkingStrategy: {
        label: 'กลยุทธ์การแบ่งชิ้นส่วน',
        default: {
          label: 'การแบ่งชิ้นส่วนแบบเริ่มต้น',
          hint: 'แบ่งข้อความเป็นชิ้นส่วนขนาดประมาณ 300 โทเค็นโดยอัตโนมัติ ถ้าเอกสารมีขนาดน้อยกว่า 300 โทเค็นหรือมีขนาดเท่าเดิมจะไม่ถูกแบ่งต่อ',
        },
        fixed_size: {
          label: 'การแบ่งชิ้นส่วนขนาดคงที่',
          hint: 'แบ่งข้อความเป็นขนาดโทเค็นประมาณที่คุณตั้งค่า',
        },
        hierarchical: {
          label: 'การแบ่งชิ้นส่วนแบบชั้น',
          hint: 'แบ่งข้อความเป็นโครงสร้างซ้อนของชิ้นส่วนลูกและชิ้นส่วนแม่',
        },
        semantic: {
          label: 'การแบ่งชิ้นส่วนแบบความหมาย',
          hint: 'แบ่งข้อความเป็นชิ้นส่วนที่มีความหมายเพื่อเพิ่มความเข้าใจและการดึงข้อมูล',
        },
        none: {
          label: 'ไม่แบ่งชิ้นส่วน',
          hint: 'เอกสารจะไม่ถูกแบ่ง',
        },
      },
      chunkingMaxTokens: {
        label: 'โทเค็นสูงสุด',
        hint: 'จำนวนโทเค็นสูงสุดต่อชิ้นส่วน',
      },
      chunkingOverlapPercentage: {
        label: 'เปอร์เซ็นต์การทับซ้อนระหว่างชิ้นส่วน',
        hint: 'การทับซ้อนของชิ้นส่วนแม่ขึ้นอยู่กับขนาดโทเค็นลูกและเปอร์เซ็นต์การทับซ้อนลูกที่คุณระบุ',
      },
      overlapTokens: {
        label: 'โทเค็นการทับซ้อน',
        hint: 'จำนวนโทเค็นที่จะทำซ้ำระหว่างชิ้นส่วนในชั้นเดียวกัน',
      },
      maxParentTokenSize: {
        label: 'ขนาดโทเค็นแม่สูงสุด',
        hint: 'จำนวนโทเค็นสูงสุดที่ชิ้นส่วนสามารถมีได้ในชั้นแม่',
      },
      maxChildTokenSize: {
        label: 'ขนาดโทเค็นลูกสูงสุด',
        hint: 'จำนวนโทเค็นสูงสุดที่ชิ้นส่วนสามารถมีได้ในชั้นลูก',
      },
      bufferSize: {
        label: 'ขนาดบัฟเฟอร์',
        hint: 'จำนวนประโยครอบ ๆ ที่จะถูกเพิ่มเพื่อสร้างการฝังข้อมูล ขนาดบัฟเฟอร์ 1 จะรวม 3 ประโยค (ประโยคปัจจุบัน ประโยคก่อนหน้า และประโยคถัดไป) เพื่อสร้างการฝังข้อมูล',
      },
      breakpointPercentileThreshold: {
        label: 'เกณฑ์เปอร์เซ็นไทล์จุดพัก',
        hint: 'เกณฑ์เปอร์เซ็นไทล์ของระยะทาง/ความคลาดเคลื่อนของประโยคเพื่อวาดจุดพักระหว่างประโยค',
      },
      opensearchAnalyzer: {
        label: 'ผู้วิเคราะห์ (Tokenization, Normalization)',
        hint: 'คุณสามารถระบุผู้วิเคราะห์เพื่อแยกและปรับมาตรฐานเอกสารที่ลงทะเบียนเป็นความรู้ การเลือกผู้วิเคราะห์ที่เหมาะสมจะปรับปรุงความแม่นยำในการค้นหา โปรดเลือกผู้วิเคราะห์ที่เหมาะสมที่สุดที่ตรงกับภาษาของความรู้ของคุณ',
        icu: {
          label: 'ICU analyzer',
          hint: 'สำหรับการแยกเป็นโทเค็น {{tokenizer}} ถูกใช้ และสำหรับการปรับมาตรฐาน {{normalizer}} ถูกใช้',
        },
        kuromoji: {
          label: 'ผู้วิเคราะห์ภาษาญี่ปุ่น (kuromoji)',
          hint: 'สำหรับการแยกเป็นโทเค็น {{tokenizer}} ถูกใช้ และสำหรับการปรับมาตรฐาน {{normalizer}} ถูกใช้',
        },
        none: {
          label: 'ผู้วิเคราะห์เริ่มต้นของระบบ',
          hint: 'ผู้วิเคราะห์เริ่มต้นที่กำหนดโดยระบบ (OpenSearch) จะถูกใช้',
        },
        tokenizer: 'เครื่องแยกคำ:',
        normalizer: 'เครื่องปรับมาตรฐาน:',
        token_filter: 'ตัวกรองโทเค็น:',
        not_specified: 'ไม่ได้ระบุ',
      },
      advancedParsing: {
        label: 'การวิเคราะห์ขั้นสูง',
        description:
          'เลือกโมเดลเพื่อใช้สำหรับความสามารถในการวิเคราะห์เอกสารขั้นสูง',
        hint: 'เหมาะสำหรับการวิเคราะห์ข้อมูลมากกว่าแบบข้อความมาตรฐานในรูปแบบเอกสารที่รองรับ รวมถึงตารางภายใน PDF ด้วยโครงสร้างที่ยังคงอยู่ มีต้นทุนเพิ่มเติมสำหรับการวิเคราะห์โดยใช้ AI เชิงสร้างสรรค์',
      },
      parsingModel: {
        label: 'โมเดลการวิเคราะห์ขั้นสูง',
        none: {
          label: 'ปิดใช้งาน',
          hint: 'จะไม่ใช้การวิเคราะห์ขั้นสูง',
        },
        claude_3_sonnet_v1: {
          label: 'Claude 3 Sonnet v1',
          hint: 'ใช้ Claude 3 Sonnet v1 สำหรับการวิเคราะห์เอกสารขั้นสูง',
        },
        claude_3_haiku_v1: {
          label: 'Claude 3 Haiku v1',
          hint: 'ใช้ Claude 3 Haiku v1 สำหรับการวิเคราะห์เอกสารขั้นสูง',
        },
      },
      webCrawlerConfig: {
        title: 'การตั้งค่าการทำเว็บคราวเลอร์',
        crawlingScope: {
          label: 'ขอบเขตการทำเว็บคราวเลอร์',
          default: {
            label: 'ค่าเริ่มต้น',
            hint: 'จำกัดการทำเว็บคราวเลอร์ให้เฉพาะหน้าเว็บที่เป็นของโฮสต์เดียวกันและมีเส้นทาง URL เริ่มต้นเดียวกัน ตัวอย่างเช่น ด้วย seed URL ของ "https://aws.amazon.com/bedrock/" จะทำเว็บคราวเลอร์เฉพาะเส้นทางนี้และหน้าเว็บที่ขยายจากเส้นทางนี้ เช่น "https://aws.amazon.com/bedrock/agents/" URL เพื่อนบ้านเช่น "https://aws.amazon.com/ec2/" จะไม่ถูกทำเว็บคราวเลอร์ ตัวอย่างเช่น',
          },
          subdomains: {
            label: 'โดเมนย่อย',
            hint: 'รวมการทำเว็บคราวเลอร์ของหน้าเว็บใด ๆ ที่มีโดเมนหลักเดียวกันกับ seed URL ตัวอย่างเช่น ด้วย seed URL ของ "https://aws.amazon.com/bedrock/" จะทำเว็บคราวเลอร์ของหน้าเว็บใด ๆ ที่มี "amazon.com" เช่น "https://www.amazon.com"',
          },
          hostOnly: {
            label: 'เฉพาะโฮสต์',
            hint: 'จำกัดการทำเว็บคราวเลอร์ให้เฉพาะหน้าเว็บที่เป็นของโฮสต์เดียวกัน ตัวอย่างเช่น ด้วย seed URL ของ "https://aws.amazon.com/bedrock/" จะทำเว็บคราวเลอร์ของหน้าเว็บที่มี "https://docs.aws.amazon.com" เช่น "https://aws.amazon.com/ec2"',
          },
        },
        includePatterns: {
          label: 'รูปแบบที่รวม',
          hint: 'ระบุรูปแบบที่รวมในการทำเว็บคราวเลอร์ เฉพาะ URL ที่ตรงกับรูปแบบเหล่านี้จะถูกทำเว็บคราวเลอร์',
        },
        excludePatterns: {
          label: 'รูปแบบที่ไม่รวม',
          hint: 'ระบุรูปแบบที่ไม่รวมในการทำเว็บคราวเลอร์ URL ที่ตรงกับรูปแบบเหล่านี้จะไม่ถูกทำเว็บคราวเลอร์',
        },
      },
    },
    error: {
      answerResponse: 'เกิดข้อผิดพลาดขณะตอบสนอง',
      notFoundConversation:
        'เนื่องจากการสนทนาที่ระบุไม่มีอยู่ หน้าจอการสนทนาใหม่จะแสดงขึ้น',
      notFoundPage: 'ไม่พบหน้าที่คุณกำลังมองหา',
      unexpectedError: {
        title: 'เกิดข้อผิดพลาดที่ไม่คาดคิด',
        restore: 'ไปที่หน้าหลัก',
      },
      predict: {
        general: 'เกิดข้อผิดพลาดขณะทำนาย',
        invalidResponse:
          'ได้รับการตอบสนองที่ไม่คาดคิด รูปแบบการตอบสนองไม่ตรงกับรูปแบบที่คาดหวัง',
      },
      notSupportedImage: 'โมเดลที่เลือกไม่รองรับภาพ',
      unsupportedFileFormat: 'รูปแบบไฟล์ที่เลือกไม่รองรับ',
      totalFileSizeToSendExceeded: 'ขนาดไฟล์ทั้งหมดต้องไม่เกิน {{maxSize}}',
      attachment: {
        fileSizeExceeded: 'ขนาดเอกสารแต่ละรายการต้องไม่เกิน {{maxSize}}',
        fileCountExceeded: 'ไม่สามารถอัปโหลดมากกว่า {{maxCount}} ไฟล์',
      },
    },
    validation: {
      title: 'ข้อผิดพลาดในการตรวจสอบ',
      maxRange: {
        message: 'ค่ามากสุดที่สามารถตั้งได้คือ {{size}}',
      },
      minRange: {
        message: 'ค่าต่ำสุดที่สามารถตั้งได้คือ {{size}}',
      },
      chunkOverlapLessThanChunkSize: {
        message: 'การทับซ้อนของชิ้นส่วนต้องน้อยกว่าขนาดชิ้นส่วน',
      },
      parentTokenRange: {
        message: 'ขนาดโทเค็นแม่ควรมากกว่าขนาดโทเค็นลูก',
      },
      quickStarter: {
        message: 'กรุณาป้อนทั้งหัวข้อและตัวอย่างการสนทนา',
      },
    },
    helper: {
      shortcuts: {
        title: 'คีย์ลัด',
        items: {
          focusInput: 'ย้ายโฟกัสไปยังอินพุตแชท',
          newChat: 'เปิดแชทใหม่',
        },
      },
    },
    guardrails: {
      title: 'เกณฑ์ควบคุม',
      label: 'เปิดใช้งานเกณฑ์ควบคุมสำหรับ Amazon Bedrock',
      hint: 'เกณฑ์ควบคุมสำหรับ Amazon Bedrock ใช้เพื่อดำเนินนโยบายความปลอดภัยเฉพาะแอปพลิเคชันของคุณตามกรณีการใช้งานและนโยบาย AI ที่รับผิดชอบ',
      harmfulCategories: {
        label: 'หมวดหมู่ที่เป็นอันตราย',
        hint: 'กำหนดค่าตัวกรองเนื้อหาโดยปรับระดับการกรองเพื่อตรวจจับและบล็อกอินพุตของผู้ใช้ที่เป็นอันตรายและการตอบสนองของโมเดลที่ละเมิดนโยบายการใช้งานของคุณ 0: ปิดใช้งาน, 1: ต่ำ, 2: กลาง, 3: สูง',
        hate: {
          label: 'ความเกลียดชัง',
          hint: 'อธิบายคำขออินพุตและการตอบสนองของโมเดลที่เลือกปฏิบัติ, วิจารณ์, ดูถูก, ประณาม, หรือมนุษย์เหยียดหยามบุคคลหรือกลุ่มบนพื้นฐานของตัวตน (เช่น เชื้อชาติ, ชาติพันธุ์, เพศ, ศาสนา, รสนิยมทางเพศ, ความสามารถ, และภูมิลำเนา) 0: ปิดใช้งาน, 1: ต่ำ, 2: กลาง, 3: สูง',
        },
        insults: {
          label: 'การดูถูก',
          hint: 'อธิบายคำขออินพุตและการตอบสนองของโมเดลที่มีภาษาที่ดูถูก, ดูหมิ่น, อัปยศ, หยาบคาย, หรือดูถูก เป็นภาษาที่มักถูกจัดเป็นการกลั่นแกล้ง 0: ปิดใช้งาน, 1: ต่ำ, 2: กลาง, 3: สูง',
        },
        sexual: {
          label: 'เพศสัมพันธ์',
          hint: 'อธิบายคำขออินพุตและการตอบสนองของโมเดลที่บ่งชี้ความสนใจทางเพศ, กิจกรรม, หรือการตื่นเต้นทางเพศโดยใช้การอ้างอิงโดยตรงหรือโดยอ้อมถึงส่วนของร่างกาย, ลักษณะทางกายภาพ, หรือเพศ 0: ปิดใช้งาน, 1: ต่ำ, 2: กลาง, 3: สูง',
        },
        violence: {
          label: 'ความรุนแรง',
          hint: 'อธิบายคำขออินพุตและการตอบสนองของโมเดลที่มีการยกย่องหรือขู่ที่จะทำร้าย, เจ็บปวด, หรือบาดเจ็บบุคคล, กลุ่ม, หรือสิ่งของ 0: ปิดใช้งาน, 1: ต่ำ, 2: กลาง, 3: สูง',
        },
        misconduct: {
          label: 'การประพฤติผิด',
          hint: 'อธิบายคำขออินพุตและการตอบสนองของโมเดลที่มุ่งหวังหรือให้ข้อมูลเกี่ยวกับการมีส่วนร่วมในกิจกรรมที่ประพฤติผิด, หรือการทำร้าย, การฉ้อโกง, หรือการเอาเปรียบบุคคล, กลุ่ม, หรือสถาบัน 0: ปิดใช้งาน, 1: ต่ำ, 2: กลาง, 3: สูง',
        },
      },
      promptAttacks: {
        hint: 'อธิบายคำขอของผู้ใช้ที่ตั้งใจจะข้ามความสามารถด้านความปลอดภัยและการดูแลของโมเดลพื้นฐานเพื่อสร้างเนื้อหาที่เป็นอันตราย (รู้จักกันในชื่อ jailbreak) และเพิกเฉยและแทนที่คำสั่งที่กำหนดโดยนักพัฒนา (เรียกว่า prompt injection) โปรดดูรายละเอียดการโจมตีด้วย Prompt เพื่อใช้กับการแท็กอินพุต',
      },
      deniedTopics: {
        hint: 'เพิ่มหัวข้อที่ห้ามได้สูงสุด 30 หัวข้อเพื่อบล็อกอินพุตของผู้ใช้หรือการตอบสนองของโมเดลที่เกี่ยวข้องกับหัวข้อนั้น',
      },
      wordFilters: {
        hint: 'ใช้ตัวกรองเหล่านี้เพื่อบล็อกคำและวลีบางคำในอินพุตของผู้ใช้และการตอบสนองของโมเดล',
        profanityFilter: {
          hint: 'เปิดใช้งานฟีเจอร์นี้เพื่อบล็อกคำหยาบคายในอินพุตของผู้ใช้และการตอบสนองของโมเดล รายการคำอิงตามคำนิยามของคำหยาบทั่วโลกและอาจมีการเปลี่ยนแปลง',
        },
        customWordsAndPhrases: {
          hint: 'ระบุคำหรือวลีสูงสุด 10,000 คำ (สูงสุด 3 คำ) ที่จะถูกบล็อกโดยเกณฑ์ควบคุม ข้อความที่ถูกบล็อกจะแสดงขึ้นหากอินพุตของผู้ใช้หรือการตอบสนองของโมเดลมีคำหรือวลีเหล่านี้',
        },
      },
      sensitiveInformationFilters: {
        hint: 'ใช้ตัวกรองเหล่านี้เพื่อจัดการกับข้อมูลที่เกี่ยวข้องกับความเป็นส่วนตัว',
        personallyIdentifiableInformationTypes: {
          PIITypes: {},
          regexPatterns: {},
        },
      },
      contextualGroundingCheck: {
        label: 'การตรวจสอบการจัดการบริบท',
        hint: 'ใช้โยบายนี้เพื่อตรวจสอบว่าการตอบสนองของโมเดลถูกจัดการอยู่ในแหล่งข้อมูลอ้างอิงและเกี่ยวข้องกับคำถามของผู้ใช้เพื่อลบการห้วงของโมเดล',
        groundingThreshold: {
          label: 'การจัดการ',
          hint: 'ตรวจสอบว่าการตอบสนองของโมเดลถูกจัดการและถูกต้องตามข้อเท็จจริงตามข้อมูลที่ให้ไว้ในแหล่งข้อมูลอ้างอิงหรือไม่ และบล็อกการตอบสนองที่ต่ำกว่าเกณฑ์การจัดการที่กำหนด 0: บล็อกทุกอย่างไม่ได้, 0.99: บล็อกเกือบทั้งหมด',
        },
        relevanceThreshold: {
          label: 'ความเกี่ยวข้อง',
          hint: 'ตรวจสอบว่าการตอบสนองของโมเดลมีความเกี่ยวข้องกับคำถามของผู้ใช้หรือไม่ และบล็อกการตอบสนองที่ต่ำกว่าเกณฑ์ความเกี่ยวข้องที่กำหนด 0: บล็อกทุกอย่างไม่ได้, 0.99: บล็อกเกือบทั้งหมด',
        },
      },
    },
  },
};

export default translation;
