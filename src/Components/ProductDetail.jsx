import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../Components/ProductDetail.css";

const button = {
    english: "Go Back",
    hindi: "वापस जाएं",
    punjabi: "ਵਾਪਸ ਜਾਓ",
};

const products = [

    {
        id: 1,
        img: "/img/IMG17.jpg",
        name: { english: "Super Seeder", hindi: "सुपर सीडर मशीन", punjabi: "ਸੁਪਰ ਸੀਡਰ ਮਸ਼ੀਨ" },
        detail: {
            english:
                "Super Seeder is used for sowing seeds directly into the soil while simultaneously mulching crop residue. It saves time, fuel, and helps in better crop growth.",
            hindi:
                "सुपर सीडर का उपयोग बीज को सीधे मिट्टी में बोने और फसल के अवशेष को एक साथ मिलाने के लिए किया जाता है। यह समय, डीज़ल की बचत करता है और फसल की बेहतर पैदावार में मदद करता है।",
            punjabi:
                "ਸੁਪਰ ਸੀਡਰ ਬੀਜਾਂ ਨੂੰ ਸਿੱਧਾ ਮਿੱਟੀ ਵਿੱਚ ਬੋਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਨਾਲ ਹੀ ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ਾਂ ਨੂੰ ਮਿਲਾਉਂਦਾ ਹੈ। ਇਹ ਸਮਾਂ, ਡੀਜ਼ਲ ਬਚਾਉਂਦਾ ਹੈ ਅਤੇ ਫਸਲ ਦੀ ਵਧੀਆ ਪੈਦਾਵਾਰ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
        },
    },
    {
        id: 2,
        img: "/img/IMG5.jpg",
        name: { english: "Reversible MB Plough", hindi: "रिवर्सेबल एम.बी. हल", punjabi: "ਰੀਵਰਸੇਬਲ ਐਮ.ਬੀ. ਹਲ" },
        detail: {
            english:
                "The reversible MB plough is used for primary tillage of soil. It turns over the soil, buries crop residue, and makes the land ready for sowing.",
            hindi:
                "रिवर्सेबल एम.बी. हल का उपयोग खेत की जुताई के लिए किया जाता है। यह मिट्टी को पलटता है, फसल के अवशेष दबाता है और भूमि को बुवाई के लिए तैयार करता है।",
            punjabi:
                "ਰੀਵਰਸੇਬਲ ਐਮ.ਬੀ. ਹਲ ਮਿੱਟੀ ਦੀ ਮੁੱਢਲੀ ਜੁਤਾਈ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਮਿੱਟੀ ਨੂੰ ਪਲਟਦਾ ਹੈ, ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ ਦਬਾਉਂਦਾ ਹੈ ਅਤੇ ਖੇਤ ਨੂੰ ਬੀਜਾਈ ਲਈ ਤਿਆਰ ਕਰਦਾ ਹੈ।",
        },
    },
    {
        id: 3,
        img: "/img/IMG15.jpg",
        name: { english: "Disc Harrow", hindi: "डिस्क हैरो", punjabi: "ਡਿਸਕ ਹੈਰੋ" },
        detail: {
            english:
                "Disc Harrow is used for breaking clods, leveling the soil, and mixing crop residue into the field. It helps in preparing a fine seedbed.",
            hindi:
                "डिस्क हैरो का उपयोग मिट्टी की ढेलों को तोड़ने, जमीन को समतल करने और फसल अवशेषों को मिट्टी में मिलाने के लिए किया जाता है। यह अच्छे बीज-बेड बनाने में सहायक है।",
            punjabi:
                "ਡਿਸਕ ਹੈਰੋ ਮਿੱਟੀ ਦੇ ਢੇਲਿਆਂ ਨੂੰ ਤੋੜਨ, ਜ਼ਮੀਨ ਨੂੰ ਸਮਤਲ ਕਰਨ ਅਤੇ ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ਾਂ ਨੂੰ ਖੇਤ ਵਿੱਚ ਮਿਲਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਵਧੀਆ ਬੀਜ-ਬੈੱਡ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
        },
    },
    {
        id: 4,
        img: "/img/IMG18.jpg",
        name: { english: "Rotary Tiller", hindi: "रोटावेटर टिलर", punjabi: "ਰੋਟਾਵੇਟਰ ਟਿਲਰ" },
        detail: {
            english:
                "Rotavator is a secondary tillage implement used for pulverizing soil, mixing manure, and removing weeds. It reduces time and labor in field preparation.",
            hindi:
                "रोटावेटर एक जुताई उपकरण है जिसका उपयोग मिट्टी को भुरभुरा करने, खाद मिलाने और खरपतवार हटाने के लिए किया जाता है। यह खेत की तैयारी में समय और मेहनत बचाता है।",
            punjabi:
                "ਰੋਟਾਵੇਟਰ ਮਿੱਟੀ ਨੂੰ ਭੁਰਭੁਰਾ ਕਰਨ, ਖਾਦ ਮਿਲਾਉਣ ਅਤੇ ਘਾਹ-ਫੂਸ ਨੂੰ ਹਟਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਖੇਤ ਦੀ ਤਿਆਰੀ ਵਿੱਚ ਸਮਾਂ ਅਤੇ ਮਜ਼ਦੂਰੀ ਬਚਾਉਂਦਾ ਹੈ।",
        },
    },
    {
        id: 5,
        img: "/img/IMG8.jpg",
        name: { english: "Subsoiler", hindi: "सब-सोइलर", punjabi: "ਸਬਸੋਇਲਰ" },
        detail: {
            english:
                "Subsoiler – A deep tillage implement used with tractors. It breaks hardpan soil, improves root growth, water absorption, and soil aeration, leading to higher crop yield and better soil health.",
            hindi:
                "सब-सोइलर – ट्रैक्टर से जुड़ने वाला गहरी जुताई का यंत्र। यह कठोर मिट्टी को तोड़कर जड़ों की वृद्धि, पानी सोखने और मिट्टी की उर्वरकता को बढ़ाता है।",
            punjabi:
                "ਸਬਸੋਇਲਰ – ਟਰੈਕਟਰ ਨਾਲ ਜੋੜ ਕੇ ਡੂੰਘੀ ਜੁੱਤੀ ਲਈ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਯੰਤਰ। ਇਹ ਸਖ਼ਤ ਮਿੱਟੀ ਨੂੰ ਤੋੜ ਕੇ ਜੜ੍ਹਾਂ ਦੀ ਵਾਧ, ਪਾਣੀ ਸੋਖਣ ਅਤੇ ਮਿੱਟੀ ਦੀ ਉਪਜਾਊ ਸ਼ਕਤੀ ਵਧਾਉਂਦਾ ਹੈ।",
        },
    },
    {
        id: 6,
        img: "/img/IMG28.jpg",
        name: { english: "Disc Plough", hindi: "डिस्क प्लाउ", punjabi: "ਡਿਸਕ ਪਲਾਓ" },
        detail: {
            english: "Disc Plough is used for primary tillage. Its discs cut, lift, and turn soil, making it suitable for hard, dry, and stony fields.",
            hindi: "डिस्क हल खेत की पहली जुताई के लिए उपयोग होता है। इसकी डिस्क मिट्टी को काटकर पलट देती हैं। यह कठोर और सूखी जमीन में उपयोगी है।",
            punjabi: "ਡਿਸਕ ਹਲ ਪਹਿਲੀ ਜੁੱਤਾਈ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਇਸ ਦੀਆਂ ਡਿਸਕਾਂ ਮਿੱਟੀ ਨੂੰ ਕੱਟ ਕੇ ਉਥੇਰਦੀਆਂ ਹਨ। ਇਹ ਸਖ਼ਤ ਤੇ ਸੁੱਕੀ ਜ਼ਮੀਨ ਲਈ ਲਾਭਦਾਇਕ ਹੈ।",
        },
    },
    {
        id: 7,
        img: "/img/IMG23.jpg",
        name: { english: "Hydraulic", hindi: "हाइड्रोलिक", punjabi: "ਹਾਈਡ੍ਰੋਲਿਕ" },
        detail: {
            english: "Disc Harrow is used after ploughing to break clods, mix crop residues, and prepare fine soil for sowing.",
            hindi: "डिस्क हैरो जुताई के बाद मिट्टी को भुरभुरा करने, ढेले तोड़ने और बुवाई के लिए खेत तैयार करने में काम आता है।",
            punjabi: "ਡਿਸਕ ਹੈਰੋ ਜੁੱਤਾਈ ਤੋਂ ਬਾਅਦ ਮਿੱਟੀ ਨੂੰ ਭੁਰਭੁਰਾ ਕਰਨ, ਢੇਲੇ ਟੁੱਟਣ ਅਤੇ ਵਿੱਢ ਬੀਜਾਈ ਲਈ ਖੇਤ ਤਿਆਰ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।",
        },
    },
    {
        id: 8,
        img: "/img/IMG_0325.jpg",
        name: { english: "Tractor Trolley", hindi: "ट्रैक्टर ट्रॉली", punjabi: "ਟ੍ਰੈਕਟਰ ਟਰੌਲੀ" },
        detail: {
            english: "The Brown Kudi Tractor Trolley combines strength, style, and reliability. Its wide tyres give powerful grip on fields and roads, while the Dhillon quality frame ensures long life. With a built-in tool box and stylish design",
            hindi: "Brown Kudi ट्रैक्टर ट्रॉली ताक़त, स्टाइल और भरोसे का बेहतरीन मेल है। चौड़े टायर खेत और सड़क पर शानदार पकड़ देते हैं, और ढिल्लों क्वालिटी फ्रेम इसकी लंबी उम्र सुनिश्चित करता है। टूल बॉक्स और आकर्षक डिज़ाइन के साथ, यह आधुनिक किसान की पहली पसंद है।",
            punjabi: "Brown Kudi  ਤਾਕਤ, ਸਟਾਈਲ ਤੇ ਭਰੋਸੇ ਦਾ ਮਿਲਾਪ ਹੈ। ਚੌੜੇ ਟਾਇਰ ਖੇਤਾਂ ਤੇ ਸੜਕਾਂ 'ਤੇ ਵਧੀਆ ਗ੍ਰਿਪ ਦਿੰਦੇ ਨੇ, ਜਦਕਿ ਢਿੱਲੋਂ ਕੁਆਲਟੀ ਫ੍ਰੇਮ ਇਸਦੀ ਲੰਬੀ ਉਮਰ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ। ਟੂਲ ਬਾਕਸ ਤੇ ਸਟਾਈਲਿਸ਼ ਡਿਜ਼ਾਈਨ ਨਾਲ, ਇਹ ਆਧੁਨਿਕ ਕਿਸਾਨ ਦੀ ਪਹਿਲੀ ਪਸੰਦ ਹੈ।",
        },


    },
];

const ProductDetail = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === parseInt(id));

    useEffect(() => {
        const section = document.getElementById("#product-detail");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    if (!product) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
    }

    const handleBack = () => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById("trade-section");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };

    return (
        <div className="product-detail-container">
            <div className="product-detail-card">
                <img src={product.img} alt={product.name[language]} />
                <h2 className="product-title">{product.name[language]}</h2>
                <p className="product-description">{product.detail[language]}</p>

                <button onClick={handleBack} className="back-button">
                    {button[language]}
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
