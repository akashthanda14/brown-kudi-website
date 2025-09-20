const translations = {
  products: [
    {
      id: 1,
      img: "/img/tyre1.jpg", // ✅ सही image path लगाओ
      name: {
        english: "Product 1",
        hindi: "उत्पाद 1",
        punjabi: "ਉਤਪਾਦ 1",
      },
      detail: {
        english: "High-quality durable tyre for heavy-duty vehicles.",
        hindi: "भारी वाहनों के लिए उच्च गुणवत्ता वाला टिकाऊ टायर।",
        punjabi: "ਭਾਰੀ ਵਾਹਨਾਂ ਲਈ ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲਾ ਟਿਕਾਊ ਟਾਇਰ।",
      },
    },
    {
      id: 2,
      img: "/img/tyre2.jpg",
      name: {
        english: "Product 2",
        hindi: "उत्पाद 2",
        punjabi: "ਉਤਪਾਦ 2",
      },
      detail: {
        english: "Premium tractor tyre for better grip and stability.",
        hindi: "बेहतर पकड़ और स्थिरता के लिए प्रीमियम ट्रैक्टर टायर।",
        punjabi: "ਵਧੀਆ ਪਕੜ ਅਤੇ ਸਥਿਰਤਾ ਲਈ ਪ੍ਰੀਮੀਅਮ ਟਰੈਕਟਰ ਟਾਇਰ।",
      },
    },
    {
      id: 3,
      img: "/img/tyre3.jpg",
      name: {
        english: "Product 3",
        hindi: "उत्पाद 3",
        punjabi: "ਉਤਪਾਦ 3",
      },
      detail: {
        english: "Strong & reliable tyres for long road life.",
        hindi: "लंबे समय तक चलने वाले मजबूत और भरोसेमंद टायर।",
        punjabi: "ਲੰਬੇ ਸਮੇਂ ਲਈ ਮਜ਼ਬੂਤ ਅਤੇ ਭਰੋਸੇਯੋਗ ਟਾਇਰ।",
      },
    },
    {
      id: 4,
      img: "/img/tyre4.jpg",
      name: {
        english: "Product 4",
        hindi: "उत्पाद 4",
        punjabi: "ਉਤਪਾਦ 4",
      },
      detail: {
        english: "Affordable and efficient tyres for all terrains.",
        hindi: "सभी इलाकों के लिए किफायती और प्रभावी टायर।",
        punjabi: "ਸਾਰੇ ਇਲਾਕਿਆਂ ਲਈ ਕਿਫ਼ਾਇਤੀ ਅਤੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਟਾਇਰ।",
      },
    },
  ],

  tyreSection: {
    title: {
      english: "Brown Kudi Tyres",
      hindi: "ब्राउन कुड़ी टायर",
      punjabi: "ਬ੍ਰਾਊਨ ਕੁੜੀ ਟਾਇਰ",
    },
    description: {
      english:
        "High-performance tyres designed for strength, durability, and smooth rides. Perfect for tractors, trucks, and heavy-duty vehicles. Built with premium quality.",
      hindi:
        "उच्च प्रदर्शन वाले टायर जो मजबूती, टिकाऊपन और आरामदायक सवारी के लिए डिज़ाइन किए गए हैं। ट्रैक्टर, ट्रक और भारी वाहनों के लिए परफेक्ट।",
      punjabi:
        "ਉੱਚ-ਪ੍ਰਦਰਸ਼ਨ ਵਾਲੇ ਟਾਇਰ ਜੋ ਮਜ਼ਬੂਤੀ, ਟਿਕਾਊਪਨ ਅਤੇ ਆਰਾਮਦਾਇਕ ਸਵਾਰੀਆਂ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤੇ ਗਏ ਹਨ। ਟਰੈਕਟਰ, ਟਰੱਕ ਅਤੇ ਭਾਰੀ-ਡਿਊਟੀ ਵਾਹਨਾਂ ਲਈ ਬਿਹਤਰ।",
    },
    button: {
      english: "More Info",
      hindi: "अधिक जानकारी",
      punjabi: "ਹੋਰ ਜਾਣਕਾਰੀ",
    },
  },

  tyres: {
    brand: {
      english: "Our Tyres",
      hindi: "हमारे टायर्स",
      punjabi: "ਸਾਡੇ ਟਾਇਰ",
    },
    list: [
      {
        id: 1,
        name: {
          english: "All Season Tyre",
          hindi: "ऑल सीजन टायर",
          punjabi: "ਆਲ ਸੀਜ਼ਨ ਟਾਇਰ",
        },
        description: {
          english: "Perfect for all weather conditions with balanced grip and durability.",
          hindi: "सभी मौसम की स्थितियों के लिए परफेक्ट, संतुलित पकड़ और टिकाऊपन के साथ।",
          punjabi: "ਸਾਰੇ ਮੌਸਮ ਦੀਆਂ ਹਾਲਾਤਾਂ ਲਈ ਸੰਪੂਰਨ, ਸੰਤੁਲਿਤ ਪਕੜ ਅਤੇ ਟਿਕਾਊਪਨ ਨਾਲ।",
        },
      },
      {
        id: 2,
        name: {
          english: "Performance Tyre",
          hindi: "परफॉर्मेंस टायर",
          punjabi: "ਪ੍ਰਦਰਸ਼ਨ ਟਾਇਰ",
        },
        description: {
          english: "High-performance tyres designed for speed and superior handling.",
          hindi: "गति और बेहतर हैंडलिंग के लिए डिज़ाइन किए गए उच्च-प्रदर्शन टायर।",
          punjabi: "ਗਤੀ ਅਤੇ ਵਧੀਆ ਹੈਂਡਲਿੰਗ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤੇ ਉੱਚ-ਪ੍ਰਦਰਸ਼ਨ ਟਾਇਰ।",
        },
      },
      {
        id: 3,
        name: {
          english: "Off-Road Tyre",
          hindi: "ऑफ-रोड टायर",
          punjabi: "ਆਫ਼-ਰੋਡ ਟਾਇਰ",
        },
        description: {
          english: "Built tough for rugged terrain and off-road agricultural use.",
          hindi: "खुरदरे इलाकों और ऑफ-रोड कृषि उपयोग के लिए मजबूत बनाया गया।",
          punjabi: "ਖੁਰਦਰੇ ਇਲਾਕਿਆਂ ਅਤੇ ਆਫ਼-ਰੋਡ ਖੇਤੀ ਵਰਤੋਂ ਲਈ ਮਜ਼ਬੂਤ ਬਣਾਇਆ ਗਿਆ।",
        },
      },
      {
        id: 4,
        name: {
          english: "Eco Tyre",
          hindi: "इको टायर",
          punjabi: "ਇਕੋ ਟਾਇਰ",
        },
        description: {
          english: "Fuel-efficient tyres engineered for long life and reduced operating costs.",
          hindi: "लंबी उम्र और कम ऑपरेटिंग लागत के लिए ईंधन-कुशल टायर।",
          punjabi: "ਲੰਬੀ ਉਮਰ ਅਤੇ ਘੱਟ ਓਪਰੇਟਿੰਗ ਲਾਗਤਾਂ ਲਈ ਇੰਧਨ-ਕੁਸ਼ਲ ਟਾਇਰ।",
        },
      },
    ],
  },

  socialSection: {
    heading: {
      english: "Follow us on Social Media",
      hindi: "हमें सोशल मीडिया पर फॉलो करें",
      punjabi: "ਸਾਨੂੰ ਸੋਸ਼ਲ ਮੀਡੀਆ 'ਤੇ ਫਾਲੋ ਕਰੋ",
    },
    ownerTitle: {
      english: "Founder & Owner of Brown Kudi Tyres",
      hindi: "ब्राउन कुड़ी टायर्स के संस्थापक और मालिक",
      punjabi: "ਬ੍ਰਾਊਨ ਕੁੜੀ ਟਾਇਰਜ਼ ਦੇ ਸੰਸਥਾਪਕ ਅਤੇ ਮਾਲਕ",
    },
  },

  about: {
    heading: {
      english: "About Us",
      hindi: "हमारे बारे में",
      punjabi: "ਸਾਡੇ ਬਾਰੇ",
    },
    para1: {
      english:
        "Brown Kudi, whose real name is Harpal Kaur Dhanjal, belongs to Goraya village Gura, Punjab. Her journey is a true example of courage and Determination Despite facing many struggles in life, she never gave up. She stepped into her father’s welding business, starting with just ₹300 a day. Today, her hard work and passion have turned her into an inspiration for millions.",
      hindi:
        "ब्राउन कुड़ी, जिनका असली नाम हरपाल कौर धांजल है, पंजाब के गोराया के गांव गुरा से ताल्लुक रखती हैं। उनकी कहानी संघर्ष और हिम्मत की मिसाल है। ज़िंदगी की कठिनाइयों के बावजूद, उन्होंने हार नहीं मानी और अपने पिता के वेल्डिंग व्यवसाय में काम करना शुरू किया। सिर्फ़ ₹300 रोज़ की मज़दूरी से शुरू हुआ सफ़र आज लाखों लोगों के लिए प्रेरणा बन चुका है।”",
      punjabi:
        "ਬ੍ਰਾਊਨ ਕੁੜੀ, ਜਿਸਦਾ ਅਸਲੀ ਨਾਮ ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ ਹੈ, ਪੰਜਾਬ ਦੇ ਗੁਰਾਇਆ ਪਿੰਡ ਗੁਰਾ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ। ਉਹਦੀ ਜ਼ਿੰਦਗੀ ਦੀ ਕਹਾਣੀ ਹੌਸਲੇ ਅਤੇ ਮਿਹਨਤ ਦੀ ਮਿਸਾਲ ਹੈ। ਮੁਸ਼ਕਲ ਹਾਲਾਤਾਂ ਦੇ ਬਾਵਜੂਦ, ਉਹ ਹਾਰ ਨਹੀਂ ਮੰਨੀ ਅਤੇ ਆਪਣੇ ਪਿਤਾ ਜੀ ਦੇ ਵੈਲਡਿੰਗ ਦੇ ਕੰਮ ‘ਚ ਹੱਥ ਬਟਾਉਣਾ ਸ਼ੁਰੂ ਕੀਤਾ। ਸਿਰਫ਼ 300 ਰੁਪਏ ਰੋਜ਼ ਦੀ ਮਜ਼ਦੂਰੀ ਨਾਲ ਸ਼ੁਰੂ ਹੋਇਆ ਇਹ ਸਫਰ, ਅੱਜ ਲੱਖਾਂ ਲੋਕਾਂ ਲਈ ਪ੍ਰੇਰਣਾ ਬਣ ਗਿਆ ਹੈ।",
    },
    para2: {
      english:
        "Through social media, her unique work and confidence reached people’s hearts, and she became widely known as “Brown Kudi – The Welder Girl.” She has proved that women can overcome challenges and achieve their dreams with self-belief and persistence. Her message is:“Stay rooted in your soil, and chase your dreams.”",
      hindi:
        "सोशल मीडिया पर उनका अनोखा काम और आत्मविश्वास लोगों के दिलों तक पहुंचा और वे मशहूर हुईं “ब्राउन कुड़ी – द वेल्डर गर्ल” के नाम से। आज वे यह साबित कर चुकी हैं कि लड़कियाँ हर मुश्किल का सामना कर सकती हैं और अपने सपनों को साकार कर सकती हैं। उनका संदेश है: “अपनी मिट्टी में रहकर, अपने सपने पूरे करो।”",
      punjabi:
        "ਸੋਸ਼ਲ ਮੀਡੀਆ ‘ਤੇ ਉਹਦਾ ਵਿਲੱਖਣ ਕੰਮ ਅਤੇ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਲੋਕਾਂ ਦੇ ਦਿਲਾਂ ਤੱਕ ਪਹੁੰਚਿਆ ਅਤੇ ਉਹ ਮਸ਼ਹੂਰ ਹੋ ਗਈ “ਬ੍ਰਾਊਨ ਕੁੜੀ – ਦ ਵੈਲਡਰ ਗਰਲ” ਦੇ ਨਾਮ ਨਾਲ। ਉਹਦਾ ਸੁਨੇਹਾ ਹੈ: “ਆਪਣੀ ਮਿੱਟੀ ‘ਚ ਰਹਿ ਕੇ, ਆਪਣੇ ਸੁਪਨੇ ਪੂਰੇ ਕਰੋ।”",
    },
    button: {
      english: "Learn More",
      hindi: "और जानें",
      punjabi: "ਹੋਰ ਜਾਣੋ",
    },
    naam: {
      english: "Harpal Kaur Dhanjal",
      hindi: "हरपाल कौर धांजल",
      punjabi: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ",
    },
  },

  testimonials: {
    heading: {
      english: "Our trusted clients",
      hindi: "हमारे विश्वसनीय ग्राहक",
      punjabi: "ਸਾਡੇ ਭਰੋਸੇਮੰਦ ਗਾਹਕ",
    },
    label: {
      english: "TESTIMONIALS",
      hindi: "प्रशंसापत्र",
      punjabi: "ਗਾਹਕ ਦੀਆਂ ਗੱਲਾਂ",
    },
    list: {
      english: [
        {
          name: "Gurpreet Singh",
          location: "Punjab, India",
          text: "The Super Seeder from Brown Kudi is a marvel. It saves so much time and fuel, and my crop growth has been noticeably better. A must-have for modern farming.",
        },
        {
          name: "Harman Kaur",
          location: "Haryana, India",
          text: "I've been using the Reversible MB Plough, and the primary tillage is excellent. It turns over the soil perfectly and buries residue, making my land ready for sowing in no time.",
        },
        {
          name: "Manpreet Singh",
          location: "Punjab, India",
          text: "The Disc Harrow has made preparing my seedbed so much easier. It breaks up the clods and levels the soil beautifully. The quality is outstanding.",
        },
        {
          name: "Jaswinder Singh",
          location: "Punjab, India",
          text: "Using the Rotary Tiller has cut down my field preparation time significantly. It pulverizes the soil and removes weeds with ease. A very efficient machine.",
        },
        {
          name: "Balwinder Singh",
          location: "Haryana, India",
          text: "The Subsoiler is a powerful tool. It broke through my hardpan soil, and I've seen a great improvement in root growth and water absorption. My yield has definitely increased.",
        },
        {
          name: "Amritpal Singh",
          location: "Punjab, India",
          text: "I am very happy with the Disc Plough. It works exceptionally well in my hard and stony fields, where other ploughs have struggled. It's built tough.",
        },
      ],
      hindi: [
        {
          name: "गुरप्रीत सिंह",
          location: "पंजाब, भारत",
          text: "ब्राउन कुड़ी का सुपर सीडर कमाल का है। यह बहुत समय और ईंधन बचाता है, और मेरी फसल की वृद्धि स्पष्ट रूप से बेहतर हुई है। आधुनिक खेती के लिए आवश्यक।",
        },
        {
          name: "हरमन कौर",
          location: "हरियाणा, भारत",
          text: "मैं रिवर्सिबल एमबी हल का उपयोग कर रही हूँ, और प्राथमिक जुताई बेहतरीन है। यह मिट्टी को पूरी तरह पलट देता है और अवशेषों को दबा देता है। खेत तुरंत बुवाई के लिए तैयार हो जाता है।",
        },
        {
          name: "मनप्रीत सिंह",
          location: "पंजाब, भारत",
          text: "डिस्क हैरो ने मेरी बीज क्यारियों को तैयार करना बहुत आसान बना दिया है। यह मिट्टी की गांठों को तोड़ता है और जमीन को समतल करता है। गुणवत्ता शानदार है।",
        },
        {
          name: "जसविंदर सिंह",
          location: "पंजाब, भारत",
          text: "रोटरी टिलर का उपयोग करने से मेरे खेत की तैयारी का समय काफी कम हो गया है। यह मिट्टी को बारीक करता है और खरपतवार आसानी से हटा देता है। बहुत ही कुशल मशीन।",
        },
        {
          name: "बलविंदर सिंह",
          location: "हरियाणा, भारत",
          text: "सबसोइलर एक शक्तिशाली उपकरण है। इसने मेरी कठोर मिट्टी को तोड़ दिया और जड़ वृद्धि और जल अवशोषण में काफी सुधार हुआ। मेरी पैदावार निश्चित रूप से बढ़ी है।",
        },
        {
          name: "अमृतपाल सिंह",
          location: "पंजाब, भारत",
          text: "मैं डिस्क हल से बहुत खुश हूँ। यह मेरे कठोर और पथरीले खेतों में बहुत अच्छा काम करता है, जहाँ अन्य हल असफल रहे हैं। यह मजबूत बना हुआ है।",
        },
      ],
      punjabi: [
        {
          name: "ਗੁਰਪ੍ਰੀਤ ਸਿੰਘ",
          location: "ਪੰਜਾਬ, ਭਾਰਤ",
          text: "ਬ੍ਰਾਊਨ ਕੁੜੀ ਦਾ ਸੁਪਰ ਸੀਡਰ ਕਮਾਲ ਦਾ ਹੈ। ਇਹ ਬਹੁਤ ਸਮਾਂ ਤੇ ਇੰਧਨ ਬਚਾਉਂਦਾ ਹੈ, ਅਤੇ ਮੇਰੀ ਫਸਲ ਦੀ ਵਾਧੂ ਬਿਹਤਰ ਹੋ ਗਈ ਹੈ। ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਲਾਜ਼ਮੀ।",
        },
        {
          name: "ਹਰਮਨ ਕੌਰ",
          location: "ਹਰਿਆਣਾ, ਭਾਰਤ",
          text: "ਮੈਂ ਰਿਵਰਸਿਬਲ ਐਮਬੀ ਹਲ ਵਰਤ ਰਹੀ ਹਾਂ, ਤੇ ਮੁੱਢਲੀ ਜੁੱਤਾਈ ਸ਼ਾਨਦਾਰ ਹੈ। ਇਹ ਮਿੱਟੀ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਉਲਟ ਦਿੰਦਾ ਹੈ ਤੇ ਬਚਿਆ ਕੁਝ ਵੀ ਦੱਬ ਦਿੰਦਾ ਹੈ। ਖੇਤ ਬੀਜਾਈ ਲਈ ਤਿਆਰ ਹੋ ਜਾਂਦਾ ਹੈ।",
        },
        {
          name: "ਮਨਪ੍ਰੀਤ ਸਿੰਘ",
          location: "ਪੰਜਾਬ, ਭਾਰਤ",
          text: "ਡਿਸਕ ਹੈਰੋ ਨੇ ਮੇਰੀ ਬੀਜ ਕਿਆਰੀਆਂ ਬਣਾਉਣਾ ਬਹੁਤ ਆਸਾਨ ਕਰ ਦਿੱਤਾ ਹੈ। ਇਹ ਮਿੱਟੀ ਦੇ ਠੱਠੇ ਤੋੜ ਦਿੰਦਾ ਹੈ ਤੇ ਜ਼ਮੀਨ ਨੂੰ ਸਮਤਲ ਕਰਦਾ ਹੈ। ਗੁਣਵੱਤਾ ਸ਼ਾਨਦਾਰ ਹੈ।",
        },
        {
          name: "ਜਸਵਿੰਦਰ ਸਿੰਘ",
          location: "ਪੰਜਾਬ, ਭਾਰਤ",
          text: "ਰੋਟਰੀ ਟਿੱਲਰ ਵਰਤਣ ਨਾਲ ਮੇਰੇ ਖੇਤ ਦੀ ਤਿਆਰੀ ਦਾ ਸਮਾਂ ਕਾਫੀ ਘੱਟ ਹੋ ਗਿਆ ਹੈ। ਇਹ ਮਿੱਟੀ ਨੂੰ ਬਰੀਕ ਕਰਦਾ ਹੈ ਤੇ ਘਾਹ-ਫੂਹੜੀਆਂ ਆਸਾਨੀ ਨਾਲ ਹਟਾ ਦਿੰਦਾ ਹੈ। ਬਹੁਤ ਹੀ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਮਸ਼ੀਨ।",
        },
        {
          name: "ਬਲਵਿੰਦਰ ਸਿੰਘ",
          location: "ਹਰਿਆਣਾ, ਭਾਰਤ",
          text: "ਸਬਸੋਇਲਰ ਇੱਕ ਤਾਕਤਵਰ ਟੂਲ ਹੈ। ਇਸ ਨੇ ਮੇਰੀ ਕਠੋਰ ਮਿੱਟੀ ਤੋੜ ਦਿੱਤੀ, ਅਤੇ ਜੜ੍ਹਾਂ ਦੀ ਵਾਧੂ ਤੇ ਪਾਣੀ ਦੀ ਸੋਖ਼ ਵਿੱਚ ਬਹੁਤ ਸੁਧਾਰ ਹੋਇਆ। ਮੇਰੀ ਪੈਦਾਵਾਰ ਵਧ ਗਈ ਹੈ।",
        },
        {
          name: "ਅਮ੍ਰਿਤਪਾਲ ਸਿੰਘ",
          location: "ਪੰਜਾਬ, ਭਾਰਤ",
          text: "ਮੈਂ ਡਿਸਕ ਹਲ ਨਾਲ ਬਹੁਤ ਖੁਸ਼ ਹਾਂ। ਇਹ ਮੇਰੇ ਕਠੋਰ ਅਤੇ ਪੱਥਰੀਲੇ ਖੇਤਾਂ ਵਿੱਚ ਬਹੁਤ ਵਧੀਆ ਕੰਮ ਕਰਦਾ ਹੈ, ਜਿੱਥੇ ਹੋਰ ਹਲ ਫੇਲ੍ਹ ਹੋ ਗਏ ਹਨ। ਇਹ ਮਜ਼ਬੂਤ ਬਣਿਆ ਹੈ।",
        },
      ],
    },
  },

  footer: {
    title: {
      english:
        "Be Bold. Be Beautiful. Be Brown Kudi,Where tradition meets modernity.",
      hindi:
        "साहसी बनो। सुंदर बनो। ब्राउन कुड़ी बनो। जहां परंपरा आधुनिकता से मिलती है।",
      punjabi:
        "ਬੋਲਡ ਬਣੋ। ਸੁੰਦਰ ਬਣੋ। ਬ੍ਰਾਊਨ ਕੁੜੀ ਬਣੋ। ਜਿੱਥੇ ਪਰੰਪਰਾ ਅਧੁਨਿਕਤਾ ਨਾਲ ਮਿਲਦੀ ਹੈ।",
    },
  },

  aboutPage: {
    badge: {
      english: "🌾 PIONEERING AGRICULTURAL EXCELLENCE SINCE 2015",
      hindi: "🌾 2015 से कृषि उत्कृष्टता का अग्रणी",
      punjabi: "🌾 2015 ਤੋਂ ਖੇਤੀਬਾੜੀ ਉਤਕਰਸ਼ਤਾ ਦਾ ਅਗਰਣੀ",
    },
    heroTitle: {
      english: "About Brown Kudi",
      hindi: "ब्राउन कुड़ी के बारे में",
      punjabi: "ਬ੍ਰਾਊਨ ਕੁੜੀ ਬਾਰੇ",
    },
    heroSubtitle: {
      english: "Harpal Kaur Dhanjal, Punjab's pioneering welder girl and Instagram influencer with 2 million followers, breaks barriers as \"Brown Kudi.\"",
      hindi: "हरपाल कौर धांजल, पंजाब की पहली महिला वेल्डर और 2 मिलियन फॉलोअर्स वाली इंस्टाग्राम प्रभावितकर्ता, \"ब्राउन कुड़ी\" के रूप में बाधाओं को तोड़ती हैं।",
      punjabi: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ, ਪੰਜਾਬ ਦੀ ਪਹਿਲੀ ਮਹਿਲਾ ਵੈਲਡਰ ਅਤੇ 2 ਮਿਲੀਅਨ ਫਾਲੋਅਰਜ਼ ਵਾਲੀ ਇੰਸਟਾਗ੍ਰਾਮ ਪ੍ਰਭਾਵਿਤ ਕਰਤਾ, \"ਬ੍ਰਾਊਨ ਕੁੜੀ\" ਦੇ ਰੂਪ ਵਿੱਚ ਰੁਕਾਵਟਾਂ ਨੂੰ ਤੋੜਦੀ ਹੈ।",
    },
    heroStats: {
      followers: {
        english: "Social Media Followers",
        hindi: "सोशल मीडिया फॉलोअर्स",
        punjabi: "ਸੋਸ਼ਲ ਮੀਡੀਆ ਫਾਲੋਅਰਜ਼",
      },
      countries: {
        english: "Countries Served",
        hindi: "सेवित देश",
        punjabi: "ਸੇਵਿਤ ਦੇਸ਼",
      },
      years: {
        english: "Years in Business",
        hindi: "व्यापार में साल",
        punjabi: "ਵਪਾਰ ਵਿੱਚ ਸਾਲ",
      },
      equipment: {
        english: "Equipment Delivered",
        hindi: "उपकरण वितरित",
        punjabi: "ਉਪਕਰਣ ਵੰਡੇ",
      },
    },
    buttons: {
      connect: {
        english: "Connect With Us",
        hindi: "हमसे जुड़ें",
        punjabi: "ਸਾਡੇ ਨਾਲ ਜੁੜੋ",
      },
      journey: {
        english: "View Our Journey",
        hindi: "हमारी यात्रा देखें",
        punjabi: "ਸਾਡੀ ਯਾਤਰਾ ਵੇਖੋ",
      },
    },
    valuesTitle: {
      english: "Our Core Values",
      hindi: "हमारे मूल मूल्य",
      punjabi: "ਸਾਡੇ ਮੂਲ ਮੁੱਲ",
    },
    valuesSubtitle: {
      english: "The principles that drive our passion for agricultural excellence",
      hindi: "कृषि उत्कृष्टता के लिए हमारे जुनून को चलाने वाले सिद्धांत",
      punjabi: "ਖੇਤੀਬਾੜੀ ਉਤਕਰਸ਼ਤਾ ਲਈ ਸਾਡੇ ਜੋਸ਼ ਨੂੰ ਚਲਾਉਣ ਵਾਲੇ ਸਿਧਾਂਤ",
    },
    values: [
      {
        title: {
          english: "Our Core Values",
          hindi: "हमारे मूल मूल्य",
          punjabi: "ਸਾਡੇ ਮੂਲ ਮੁੱਲ",
        },
        description: {
          english: "Every tyre and agricultural equipment undergoes rigorous quality checks. We import only from certified manufacturers ensuring durability and performance",
          hindi: "हर टायर और कृषि उपकरण कठोर गुणवत्ता जांच से गुजरता है। हम केवल प्रमाणित निर्माताओं से आयात करते हैं जो टिकाऊपन और प्रदर्शन सुनिश्चित करते हैं",
          punjabi: "ਹਰ ਟਾਇਰ ਅਤੇ ਖੇਤੀਬਾੜੀ ਉਪਕਰਣ ਸਖ਼ਤ ਗੁਣਵੱਤਾ ਜਾਂਚ ਤੋਂ ਗੁਜ਼ਰਦਾ ਹੈ। ਅਸੀਂ ਸਿਰਫ਼ ਪ੍ਰਮਾਣਿਤ ਨਿਰਮਾਤਾਵਾਂ ਤੋਂ ਆਯਾਤ ਕਰਦੇ ਹਾਂ ਜੋ ਟਿਕਾਊਪਨ ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਨ",
        },
      },
      {
        title: {
          english: "Customer Success",
          hindi: "ग्राहक सफलता",
          punjabi: "ਗਾਹਕ ਸਫਲਤਾ",
        },
        description: {
          english: "From small farmers to large agricultural enterprises, we provide personalized solutions. Our 95% customer satisfaction rate reflects our commitment to understanding and meeting each client's unique needs.",
          hindi: "छोटे किसानों से लेकर बड़े कृषि उद्यमों तक, हम व्यक्तिगत समाधान प्रदान करते हैं। हमारी 95% ग्राहक संतुष्टि दर हमारे प्रत्येक ग्राहक की अनूठी जरूरतों को समझने और पूरा करने के लिए हमारे प्रतिबद्धता को दर्शाती है।",
          punjabi: "ਛੋਟੇ ਕਿਸਾਨਾਂ ਤੋਂ ਲੈ ਕੇ ਵੱਡੇ ਖੇਤੀਬਾੜੀ ਉਦਯੋਗਾਂ ਤੱਕ, ਅਸੀਂ ਨਿੱਜੀ ਹੱਲ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ। ਸਾਡੀ 95% ਗਾਹਕ ਸੰਤੁਸ਼ਟੀ ਦਰ ਸਾਡੀ ਹਰੇਕ ਗਾਹਕ ਦੀ ਵਿਲੱਖਣ ਲੋੜਾਂ ਨੂੰ ਸਮਝਣ ਅਤੇ ਪੂਰੀ ਕਰਨ ਲਈ ਸਾਡੀ ਵਚਨਬੱਧਤਾ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ।",
        },
      },
      {
        title: {
          english: "Authentic Content",
          hindi: "प्रामाणिक सामग्री",
          punjabi: "ਪ੍ਰਮਾਣਿਕ ਸਮੱਗਰੀ",
        },
        description: {
          english: "Through genuine storytelling and real farming experiences, we've built a community of 2M+ followers who trust our expertise in farming and agricultural equipment selection.",
          hindi: "वास्तविक कहानी कहने और वास्तविक कृषि अनुभवों के माध्यम से, हमने 2M+ फॉलोअर्स की एक समुदाय बनाया है जो कृषि और कृषि उपकरण चयन में हमारे विशेषज्ञता पर भरोसा करते हैं।",
          punjabi: "ਅਸਲੀ ਕਹਾਣੀ ਸੁਣਾਉਣ ਅਤੇ ਅਸਲੀ ਖੇਤੀਬਾੜੀ ਅਨੁਭਵਾਂ ਦੇ ਜ਼ਰੀਏ, ਅਸੀਂ 2M+ ਫਾਲੋਅਰਜ਼ ਦਾ ਇੱਕ ਸਮੂਹ ਬਣਾਇਆ ਹੈ ਜੋ ਖੇਤੀਬਾੜੀ ਅਤੇ ਖੇਤੀਬਾੜੀ ਉਪਕਰਣ ਚੋਣ ਵਿੱਚ ਸਾਡੀ ਮਾਹਿਰਤਾ 'ਤੇ ਭਰੋਸਾ ਕਰਦੇ ਹਨ।",
        },
      },
    ],
    statsTitle: {
      english: "Our Journey in Numbers",
      hindi: "संख्याओं में हमारी यात्रा",
      punjabi: "ਅੰਕਾਂ ਵਿੱਚ ਸਾਡੀ ਯਾਤਰਾ",
    },
    statsSubtitle: {
      english: "Celebrating milestones that reflect our commitment to agricultural excellence",
      hindi: "मील के पत्थर मनाते हुए जो कृषि उत्कृष्टता के लिए हमारे प्रतिबद्धता को दर्शाते हैं",
      punjabi: "ਮੀਲ ਪੱਥਰ ਮਨਾਉਂਦੇ ਹੋਏ ਜੋ ਖੇਤੀਬਾੜੀ ਉਤਕਰਸ਼ਤਾ ਲਈ ਸਾਡੀ ਵਚਨਬੱਧਤਾ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ",
    },
    statsLabels: {
      business: {
        english: "Years in Business",
        hindi: "व्यापार में साल",
        punjabi: "ਵਪਾਰ ਵਿੱਚ ਸਾਲ",
      },
      satisfaction: {
        english: "Client Satisfaction %",
        hindi: "ग्राहक संतुष्टि %",
        punjabi: "ਗਾਹਕ ਸੰਤੁਸ਼ਟੀ %",
      },
      delivered: {
        english: "Equipment Delivered",
        hindi: "उपकरण वितरित",
        punjabi: "ਉਪਕਰਣ ਵੰਡੇ",
      },
      served: {
        english: "Countries Served",
        hindi: "सेवित देश",
        punjabi: "ਸੇਵਿਤ ਦੇਸ਼",
      },
    },
    teamBadge: {
      english: "👥 OUR LEADERSHIP TEAM",
      hindi: "👥 हमारी नेतृत्व टीम",
      punjabi: "👥 ਸਾਡੀ ਨੇਤ੍ਰਿਤਵ ਟੀਮ",
    },
    teamTitle: {
      english: "Meet Our Visionary Team",
      hindi: "हमारी दूरदर्शी टीम से मिलें",
      punjabi: "ਸਾਡੀ ਦੂਰਦ੍ਰਿਸ਼ਟੀ ਵਾਲੀ ਟੀਮ ਨਾਲ ਮਿਲੋ",
    },
    teamSubtitle: {
      english: "Passionate innovators dedicated to transforming agriculture through expertise, tradition, and cutting-edge technology",
      hindi: "निपुणता, परंपरा और अत्याधुनिक तकनीक के माध्यम से कृषि को बदलने के लिए समर्पित भावुक नवप्रवर्तक",
      punjabi: "ਮਾਹਿਰਤਾ, ਪਰੰਪਰਾ ਅਤੇ ਅਧੁਨਿਕ ਤਕਨਾਲੋਜੀ ਦੇ ਜ਼ਰੀਏ ਖੇਤੀਬਾੜੀ ਨੂੰ ਬਦਲਣ ਲਈ ਸਮਰਪਿਤ ਜੋਸ਼ੀਲੇ ਨਵੀਨਤਾਕਾਰਕ",
    },
    teamMembers: [
      {
        name: {
          english: "Harpal Kaur Dhanjal",
          hindi: "हरपाल कौर धांजल",
          punjabi: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ",
        },
        role: {
          english: "Co-Founder & Operations Director",
          hindi: "सह-संस्थापक और संचालन निदेशक",
          punjabi: "ਸਹ-ਸੰਸਥਾਪਕ ਅਤੇ ਸੰਚਾਲਨ ਨਿਰਦੇਸ਼ਕ",
        },
        description: {
          english: "Punjab's first professional female welder turned international entrepreneur. With 2M Instagram followers, she's revolutionized trade between India, Australia, and Canada. From mastering arc welding to building a multi-million dollar import-export business, she's redefined what's possible for women in agriculture.",
          hindi: "पंजाब की पहली पेशेवर महिला वेल्डर जो अंतरराष्ट्रीय उद्यमी बनीं। 2M इंस्टाग्राम फॉलोअर्स के साथ, उन्होंने भारत, ऑस्ट्रेलिया और कनाडा के बीच व्यापार में क्रांति ला दी है। आर्क वेल्डिंग में महारत हासिल करने से लेकर बहु-मिलियन डॉलर के आयात-निर्यात व्यवसाय बनाने तक, उन्होंने कृषि में महिलाओं के लिए संभव को फिर से परिभाषित किया है।",
          punjabi: "ਪੰਜਾਬ ਦੀ ਪਹਿਲੀ ਪੇਸ਼ੇਵਰ ਮਹਿਲਾ ਵੈਲਡਰ ਜੋ ਅੰਤਰਰਾਸ਼ਟਰੀ ਉਦਯੋਗਪਤੀ ਬਣੀ। 2M ਇੰਸਟਾਗ੍ਰਾਮ ਫਾਲੋਅਰਜ਼ ਦੇ ਨਾਲ, ਉਸ ਨੇ ਭਾਰਤ, ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਕੈਨੇਡਾ ਵਿਚਕਾਰ ਵਪਾਰ ਵਿੱਚ ਇਨਕਲਾਬ ਲਿਆ ਹੈ। ਆਰਕ ਵੈਲਡਿੰਗ ਵਿੱਚ ਮਾਹਿਰਤਾ ਹਾਸਲ ਕਰਨ ਤੋਂ ਲੈ ਕੇ ਮਲਟੀ-ਮਿਲੀਅਨ ਡਾਲਰ ਦੇ ਆਯਾਤ-ਨਿਰਯਾਤ ਕਾਰੋਬਾਰ ਬਣਾਉਣ ਤੱਕ, ਉਸ ਨੇ ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਮਹਿਲਾਵਾਂ ਲਈ ਸੰਭਵ ਨੂੰ ਦੁਬਾਰਾ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਹੈ।",
        },
        achievements: {
          english: ["2M+ Social Media Following", "Australia-Canada Trade Partner","Agricultural Innovation Leader"],
          hindi: ["2M+ सोशल मीडिया फॉलोइंग", "ऑस्ट्रेलिया-कनाडा व्यापार भागीदार","कृषि नवाचार नेता"],
          punjabi: ["2M+ ਸੋਸ਼ਲ ਮੀਡੀਆ ਫਾਲੋਇੰਗ", "ਆਸਟ੍ਰੇਲੀਆ-ਕੈਨੇਡਾ ਵਪਾਰ ਭਾਗੀਦਾਰ","ਖੇਤੀਬਾੜੀ ਨਵੀਨਤਾ ਨੇਤਾ"],
        },
      },
      {
        name: {
          english: "Bhagwan Singh Dhanjal",
          hindi: "भगवान सिंह धांजल",
          punjabi: "ਭਗਵਾਨ ਸਿੰਘ ਧੰਜਲ",
        },
        role: {
          english: "Founder & CEO - Brown Kudi Enterprises",
          hindi: "संस्थापक और सीईओ - ब्राउन कुड़ी एंटरप्राइजेज",
          punjabi: "ਸੰਸਥਾਪਕ ਅਤੇ ਸੀਈਓ - ਬ੍ਰਾਊਨ ਕੁੜੀ ਐਂਟਰਪ੍ਰਾਈਜ਼",
        },
        description: {
          english: "Agricultural veteran with 30+ years of farming and equipment expertise. Oversees quality control for all imported machinery and provides technical guidance for equipment selection. His deep understanding of Indian farming needs ensures every piece of equipment meets local requirements.",
          hindi: "30+ साल के कृषि और उपकरण विशेषज्ञता वाला कृषि दिग्गज। सभी आयातित मशीनरी के लिए गुणवत्ता नियंत्रण की देखरेख करता है और उपकरण चयन के लिए तकनीकी मार्गदर्शन प्रदान करता है। भारतीय कृषि आवश्यकताओं की उनकी गहरी समझ यह सुनिश्चित करती है कि हर उपकरण स्थानीय आवश्यकताओं को पूरा करता है।",
          punjabi: "30+ ਸਾਲ ਦੀ ਖੇਤੀਬਾੜੀ ਅਤੇ ਉਪਕਰਣ ਮਾਹਿਰਤਾ ਵਾਲਾ ਖੇਤੀਬਾੜੀ ਦਿਗਗਜ। ਸਾਰੀ ਆਯਾਤੀ ਮਸ਼ੀਨਰੀ ਲਈ ਗੁਣਵੱਤਾ ਨਿਯੰਤਰਣ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦਾ ਹੈ ਅਤੇ ਉਪਕਰਣ ਚੋਣ ਲਈ ਤਕਨੀਕੀ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਲੋੜਾਂ ਦੀ ਉਸਦੀ ਗਹਿਰੀ ਸਮਝ ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ ਕਿ ਹਰ ਉਪਕਰਣ ਸਥਾਨਕ ਲੋੜਾਂ ਨੂੰ ਪੂਰਾ ਕਰਦਾ ਹੈ।",
        },
        achievements: {
          english: ["30+ Years Agriculture Experience", "Equipment Quality Specialist", "Farming Operations Expert", "Technical Advisory Leader"],
          hindi: ["30+ साल कृषि अनुभव", "उपकरण गुणवत्ता विशेषज्ञ", "कृषि संचालन विशेषज्ञ", "तकनीकी सलाहकार नेता"],
          punjabi: ["30+ ਸਾਲ ਖੇਤੀਬਾੜੀ ਅਨੁਭਵ", "ਉਪਕਰਣ ਗੁਣਵੱਤਾ ਮਾਹਿਰ", "ਖੇਤੀਬਾੜੀ ਸੰਚਾਲਨ ਮਾਹਿਰ", "ਤਕਨੀਕੀ ਸਲਾਹਕਾਰ ਨੇਤਾ"],
        },
      },
    ],
    ctaBadge: {
      english: "🚀 START YOUR AGRICULTURAL JOURNEY",
      hindi: "🚀 अपनी कृषि यात्रा शुरू करें",
      punjabi: "🚀 ਆਪਣੀ ਖੇਤੀਬਾੜੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    },
    ctaTitle: {
      english: "Ready to Transform Your Agriculture?",
      hindi: "अपनी कृषि को बदलने के लिए तैयार हैं?",
      punjabi: "ਆਪਣੀ ਖੇਤੀਬਾੜੀ ਨੂੰ ਬਦਲਣ ਲਈ ਤਿਆਰ ਹੋ?",
    },
    ctaSubtitle: {
      english: "Join thousands of farmers worldwide who trust Brown Kudi for innovative agricultural solutions, sustainable practices, and exceptional results",
      hindi: "हजारों किसानों में शामिल हों जो दुनिया भर में ब्राउन कुड़ी पर नवीन कृषि समाधानों, टिकाऊ प्रथाओं और असाधारण परिणामों के लिए भरोसा करते हैं",
      punjabi: "ਹਜ਼ਾਰਾਂ ਕਿਸਾਨਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ ਜੋ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਬ੍ਰਾਊਨ ਕੁੜੀ 'ਤੇ ਨਵੀਨ ਖੇਤੀਬਾੜੀ ਹੱਲਾਂ, ਟਿਕਾਊ ਅਭਿਆਸਾਂ ਅਤੇ ਅਸਾਧਾਰਣ ਨਤੀਜਿਆਂ ਲਈ ਭਰੋਸਾ ਕਰਦੇ ਹਨ",
    },
    benefits: [
      {
        title: {
          english: "Quality Equipment",
          hindi: "गुणवत्तापूर्ण उपकरण",
          punjabi: "ਗੁਣਵੱਤਾ ਵਾਲੇ ਉਪਕਰਣ",
        },
        desc: {
          english: "Premium tyres & machinery",
          hindi: "प्रीमियम टायर और मशीनरी",
          punjabi: "ਪ੍ਰੀਮੀਅਮ ਟਾਇਰ ਅਤੇ ਮਸ਼ੀਨਰੀ",
        },
      },
      {
        title: {
          english: "Proven Results",
          hindi: "सिद्ध परिणाम",
          punjabi: "ਸਿੱਧੇ ਨਤੀਜੇ",
        },
        desc: {
          english: "95% customer satisfaction rate",
          hindi: "95% ग्राहक संतुष्टि दर",
          punjabi: "95% ਗਾਹਕ ਸੰਤੁਸ਼ਟੀ ਦਰ",
        },
      },
      {
        title: {
          english: "International Trade",
          hindi: "अंतरराष्ट्रीय व्यापार",
          punjabi: "ਅੰਤਰਰਾਸ਼ਟਰੀ ਵਪਾਰ",
        },
        desc: {
          english: "Direct export to 5+ countries",
          hindi: "5+ देशों में प्रत्यक्ष निर्यात",
          punjabi: "5+ ਦੇਸ਼ਾਂ ਵਿੱਚ ਸਿੱਧਾ ਨਿਰਯਾਤ",
        },
      },
    ],
    ctaButtons: {
      started: {
        english: "Get Started Today",
        hindi: "आज ही शुरू करें",
        punjabi: "ਅੱਜ ਹੀ ਸ਼ੁਰੂ ਕਰੋ",
      },
      gallery: {
        english: "View Our gallery",
        hindi: "हमारी गैलरी देखें",
        punjabi: "ਸਾਡੀ ਗੈਲਰੀ ਵੇਖੋ",
      },
      contact: {
        english: "Contact Us",
        hindi: "हमसे संपर्क करें",
        punjabi: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      },
    },
  },



};




export default translations;
