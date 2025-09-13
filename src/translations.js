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
        "High-performance tyres designed for strength, durability, and smooth rides. Ideal for tractors, trucks, and heavy-duty vehicles. Exported worldwide with premium quality and unmatched reliability.",
      hindi:
        "उच्च प्रदर्शन वाले टायर जो मजबूती, टिकाऊपन और आरामदायक सवारी के लिए डिज़ाइन किए गए हैं। ट्रैक्टर, ट्रक और भारी वाहनों के लिए उपयुक्त। विश्वभर में निर्यातित, प्रीमियम गुणवत्ता और अतुलनीय विश्वसनीयता के साथ।",
      punjabi:
        "ਉੱਚ-ਪ੍ਰਦਰਸ਼ਨ ਵਾਲੇ ਟਾਇਰ ਜੋ ਮਜ਼ਬੂਤੀ, ਟਿਕਾਊਪਨ ਅਤੇ ਆਰਾਮਦਾਇਕ ਸਵਾਰੀਆਂ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤੇ ਗਏ ਹਨ। ਟਰੈਕਟਰ, ਟਰੱਕ ਅਤੇ ਭਾਰੀ-ਡਿਊਟੀ ਵਾਹਨਾਂ ਲਈ ਉਚਿਤ। ਪ੍ਰੀਮੀਅਮ ਗੁਣਵੱਤਾ ਅਤੇ ਬੇਮਿਸਾਲ ਭਰੋਸੇਯੋਗਤਾ ਨਾਲ ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਨਿਰਿਆਤ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।",
    },
    button: {
      english: "More Info",
      hindi: "अधिक जानकारी",
      punjabi: "ਹੋਰ ਜਾਣਕਾਰੀ",
    },
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



};




export default translations;
