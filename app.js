

var getData = function (lang,text) {
	var langCode ;
	switch(lang){
		case "Afrikaans":
			langCode = "af";
			break;
		case "Albanian":
			langCode = "sq";
			break;
		case "Amharic":
			langCode = "am";
			break;
		case "Arabic":
			langCode = "ar";
			break;
		case "Armenian":
			langCode = "hy";
			break;
		case "Azerbaijani":
			langCode = "az";
			break;
		case "Basque":
			langCode = "eu";
			break;
		case "Belarusian":
			langCode = "be";
			break;
		case "Bengali":
			langCode = "bn";
			break;
		case "Bosnian":
			langCode = "bs";
			break;
		case "Bulgarian":
			langCode = "bg";
			break;
		case "Catalan":
			langCode = "ca";
			break;
		case "Cebuano":
			langCode = "ceb";
			break;
		case "Chichewa":
			langCode = "ny";
			break;
		case "Chinese (Simplified)":
			langCode = "zh-CN";
			break;
		case "Chinese (Traditional)":
			langCode = "zh-TW";
			break;
		case "Corsican":
			langCode = "co";
			break;
		case "Croatian":
			langCode = "hr";
			break;
		case "Czech":
			langCode = "cs";
			break;
		case "Danish":
			langCode = "da";
			break;
		case "Dutch":
			langCode = "nl";
			break;
		case "English":
			langCode = "en";
			break;
		case "Esperanto":
			langCode = "eo";
			break;
		case "Estonian":
			langCode = "et";
			break;
		case "Filipino":
			langCode = "tl";
			break;
		case "Finnish":
			langCode = "fi";
			break;
		case "French":
			langCode = "fr";
			break;
		case "Frisian":
			langCode = "fy";
			break;
		case "Galician":
			langCode = "gl";
			break;
		case "Georgian":
			langCode = "ka";
			break;
		case "German":
			langCode = "de";
			break;
		case "Greek":
			langCode = "el";
			break;
		case "Gujarati":
			langCode = "gu";
			break;
		case "Haitian Creole":
			langCode = "ht";
			break;
		case "Hausa":
			langCode = "ha";
			break;
		case "Hawaiian":
			langCode = "haw";
			break;
		case "Hebrew":
			langCode = "iw";
			break;
		case "Hindi":
			langCode = "hi";
			break;
		case "Hmong":
			langCode = "hmn";
			break;
		case "Hungarian":
			langCode = "hu";
			break;
		case "Icelandic":
			langCode = "is";
			break;
		case "Igbo":
			langCode = "ig";
			break;
		case "Indonesian":
			langCode = "id";
			break;
		case "Irish":
			langCode = "ga";
			break;
		case "Italian":
			langCode = "it";
			break;
		case "Japanese":
			langCode = "ja";
			break;
		case "Javanese":
			langCode = "jw";
			break;
		case "Kannada":
			langCode = "kn";
			break;
		case "Kazakh":
			langCode = "kk";
			break;
		case "Khmer":
			langCode = "km";
			break;
		case "Kinyarwanda":
			langCode = "rw";
			break;
		case "Korean":
			langCode = "ko";
			break;
		case "Kurdish":
			langCode = "ku";
			break;
		case "Kyrgyz":
			langCode = "ky";
			break;
		case "Lao":
			langCode = "lo";
			break;
		case "Latin":
			langCode = "la";
			break;
		case "Latvian":
			langCode = "lv";
			break;
		case "Lithuanian":
			langCode = "lt";
			break;
		case "Luxembourgish":
			langCode = "lb";
			break;
		case "Macedonian":
			langCode = "mk";
			break;
		case "Malagasy":
			langCode = "mg";
			break;
		case "Malay":
			langCode = "ms";
			break;
		case "Malayalam":
			langCode = "ml";
			break;
		case "Maltese":
			langCode = "mt";
			break;
		case "Maori":
			langCode = "mi";
			break;
		case "Marathi":
			langCode = "mr";
			break;
		case "Mongolian":
			langCode = "mn";
			break;
		case "Myanmar (Burmese)":
			langCode = "my";
			break;
		case "Nepali":
			langCode = "ne";
			break;
		case "Norwegian":
			langCode = "no";
			break;
		case "Odia (Oriya)":
			langCode = "or";
			break;
		case "Pashto":
			langCode = "ps";
			break;
		case "Persian":
			langCode = "fa";
			break;
		case "Polish":
			langCode = "	pl";
			break;
		case "Portuguese":
			langCode = "pt";
			break;
		case "Punjabi":
			langCode = "pa";
			break;
		case "Romanian":
			langCode = "ro";
			break;
		case "Russian":
			langCode = "ru";
			break;
		case "Samoan":
			langCode = "sm";
			break;
		case "Scots Gaelic":
			langCode = "gd";
			break;
		case "Serbian":
			langCode = "sr";
			break;
		case "Sesotho":
			langCode = "st";
			break;
		case "Shona":
			langCode = "sn";
			break;
		case "Sindhi":
			langCode = "sd";
			break;
		case "Sinhala":
			langCode = "si";
			break;
		case "Slovak":
			langCode = "sk";
			break;
		case "Slovenian":
			langCode = "sl";
			break;
		case "Somali":
			langCode = "so";
			break;
		case "Spanish":
			langCode = "es";
			break;
		case "Sundanese":
			langCode = "su";
			break;
		case "Swahili":
			langCode = "sw";
			break;
		case "Swedish":
			langCode = "sv";
			break;
		case "Tajik":
			langCode = "tg";
			break;
		case "Tamil":
			langCode = "ta";
			break;
		case "Tatar":
			langCode = "tt";
			break;
		case "Telugu":
			langCode = "te";
			break;
		case "Thai":
			langCode = "th";
			break;
		case "Turkish":
			langCode = "tr";
			break;
		case "Turkmen":
			langCode = "tk";
			break;
		case "Ukrainian":
			langCode = "uk";
			break;
		case "Urdu":
			langCode = "ur";
			break;
		case "Uyghur":
			langCode = "ug";
			break;
		case "Uzbek":
			langCode = "uz";
			break;
		case "Vietnamese":
			langCode = "vi";
			break;
		case "Welsh":
			langCode = "cy";
			break;
		case "Xhosa":
			langCode = "xh";
			break;
		case "Yiddish":
			langCode = "yi";
			break;
		case "Yoruba":
			langCode = "yo";
			break;
		case "Zulu":
			langCode = "zu";
			break;
		case "Hebrew":
			langCode = "he";
			break;
		case "Chinese (Simplified)":
			langCode = "zh";
			break;
		default:
			alert("Enter language carefully");
			break;
	}
	const encodedParams = new URLSearchParams();
	encodedParams.append("source_language", "auto");
	encodedParams.append("target_language", langCode);
	encodedParams.append("text", text);

	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': '989c9956cfmsh65f0f23e868db5dp1ebce9jsn9f3c3204bc76',
			'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
		},
		body: encodedParams
	};


	fetch('https://text-translator2.p.rapidapi.com/translate', options)
		.then(response => response.json())
		.then(response => {
			var transText = response.data.translatedText;
			var sta = response.status;
			document.getElementById("converted").innerHTML = transText;
			console.log(response);
		})
		.catch(err => console.error(err));
}
document.getElementById("submit1").addEventListener("click",(e)=>{
	e.preventDefault();
	getData(lang.value,originalText.value);
})