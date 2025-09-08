import { footer } from "framer-motion/client";

const translations = {
    products: [
        {
            id: 1,
            img: "/img/.jpg", // ✅ image path add
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
            english: "High-performance tyres designed for strength, durability, and smooth rides. Perfect for tractors, trucks, and heavy-duty vehicles. Built with premium quality for Indian roads.",
            hindi: "उच्च प्रदर्शन वाले टायर जो मजबूती, टिकाऊपन और आरामदायक सवारी के लिए डिज़ाइन किए गए हैं। ट्रैक्टर, ट्रक और भारी वाहनों के लिए परफेक्ट। भारतीय सड़कों के लिए प्रीमियम गुणवत्ता से बने।",
            punjabi: "ਉੱਚ-ਪ੍ਰਦਰਸ਼ਨ ਵਾਲੇ ਟਾਇਰ ਜੋ ਮਜ਼ਬੂਤੀ, ਟਿਕਾਊਪਨ ਅਤੇ ਆਰਾਮਦਾਇਕ ਸਵਾਰੀਆਂ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤੇ ਗਏ ਹਨ। ਟਰੈਕਟਰ, ਟਰੱਕ ਅਤੇ ਭਾਰੀ-ਡਿਊਟੀ ਵਾਹਨਾਂ ਲਈ ਬਿਹਤਰ। ਭਾਰਤੀ ਸੜਕਾਂ ਲਈ ਪ੍ਰੀਮਿਅਮ ਕੁਆਲਿਟੀ ਨਾਲ ਬਣਾਏ ਗਏ।",
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
            english: "Brown Kudi, whose real name is Harpal Kaur Dhanjal, belongs to Goraya village Gura, Punjab. Her journey is a true example of courage and Determination Despite facing many struggles in life, she never gave up. She stepped into her father’s welding business, starting with just ₹300 a day. Today, her hard work and passion have turned her into an inspiration for millions.",
            hindi: "ब्राउन कुड़ी, जिनका असली नाम हरपाल कौर धांजल है, पंजाब के गोराया के गांव गुरा से ताल्लुक रखती हैं। उनकी कहानी संघर्ष और हिम्मत की मिसाल है। ज़िंदगी की कठिनाइयों के बावजूद, उन्होंने हार नहीं मानी और अपने पिता के वेल्डिंग व्यवसाय में काम करना शुरू किया। सिर्फ़ ₹300 रोज़ की मज़दूरी से शुरू हुआ सफ़र आज लाखों लोगों के लिए प्रेरणा बन चुका है।”",
            punjabi: "ਬ੍ਰਾਊਨ ਕੁੜੀ, ਜਿਸਦਾ ਅਸਲੀ ਨਾਮ ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ ਹੈ, ਪੰਜਾਬ ਦੇ ਗੁਰਾਇਆ ਪਿੰਡ ਗੁਰਾ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ। ਉਹਦੀ ਜ਼ਿੰਦਗੀ ਦੀ ਕਹਾਣੀ ਹੌਸਲੇ ਅਤੇ ਮਿਹਨਤ ਦੀ ਮਿਸਾਲ ਹੈ। ਮੁਸ਼ਕਲ ਹਾਲਾਤਾਂ ਦੇ ਬਾਵਜੂਦ, ਉਹ ਹਾਰ ਨਹੀਂ ਮੰਨੀ ਅਤੇ ਆਪਣੇ ਪਿਤਾ ਜੀ ਦੇ ਵੈਲਡਿੰਗ ਦੇ ਕੰਮ ‘ਚ ਹੱਥ ਬਟਾਉਣਾ ਸ਼ੁਰੂ ਕੀਤਾ। ਸਿਰਫ਼ 300 ਰੁਪਏ ਰੋਜ਼ ਦੀ ਮਜ਼ਦੂਰੀ ਨਾਲ ਸ਼ੁਰੂ ਹੋਇਆ ਇਹ ਸਫਰ, ਅੱਜ ਲੱਖਾਂ ਲੋਕਾਂ ਲਈ ਪ੍ਰੇਰਣਾ ਬਣ ਗਿਆ ਹੈ।",
        },
        para2: {
            english: "Through social media, her unique work and confidence reached people’s hearts, and she became widely known as “Brown Kudi – The Welder Girl.” She has proved that women can overcome challenges and achieve their dreams with self-belief and persistence. Her message is:“Stay rooted in your soil, and chase your dreams.”",
            hindi: "सोशल मीडिया पर उनका अनोखा काम और आत्मविश्वास लोगों के दिलों तक पहुंचा और वे मशहूर हुईं “ब्राउन कुड़ी – द वेल्डर गर्ल” के नाम से। आज वे यह साबित कर चुकी हैं कि लड़कियाँ हर मुश्किल का सामना कर सकती हैं और अपने सपनों को साकार कर सकती हैं। उनका संदेश है: “अपनी मिट्टी में रहकर, अपने सपने पूरे करो।”",
            punjabi: "ਸੋਸ਼ਲ ਮੀਡੀਆ ‘ਤੇ ਉਹਦਾ ਵਿਲੱਖਣ ਕੰਮ ਅਤੇ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਲੋਕਾਂ ਦੇ ਦਿਲਾਂ ਤੱਕ ਪਹੁੰਚਿਆ ਅਤੇ ਉਹ ਮਸ਼ਹੂਰ ਹੋ ਗਈ “ਬ੍ਰਾਊਨ ਕੁੜੀ – ਦ ਵੈਲਡਰ ਗਰਲ” ਦੇ ਨਾਮ ਨਾਲ। ਉਹਦਾ ਸੁਨੇਹਾ ਹੈ: “ਆਪਣੀ ਮਿੱਟੀ ‘ਚ ਰਹਿ ਕੇ, ਆਪਣੇ ਸੁਪਨੇ ਪੂਰੇ ਕਰੋ।”",
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
    footer: {
        title: {
            english: "Be Bold. Be Beautiful. Be Brown Kudi,Where tradition meets modernity.",
            hindi: "साहसी बनो। सुंदर बनो। ब्राउन कुड़ी बनो। जहां परंपरा आधुनिकता से मिलती है।",
            punjabi: "ਬੋਲਡ ਬਣੋ। ਸੁੰਦਰ ਬਣੋ। ਬ੍ਰਾਊਨ ਕੁੜੀ ਬਣੋ। ਜਿੱਥੇ ਪਰੰਪਰਾ ਅਧੁਨਿਕਤਾ ਨਾਲ ਮਿਲਦੀ ਹੈ।",
        },
    },
};

export default translations;

