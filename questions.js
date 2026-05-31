// ============================================================
// ARABIC QUESTION BANK - 320+ Questions
// Each question: { question, answer, firstLetter, category, alternateAnswers }
// firstLetter is the normalized first Arabic letter of the answer
// ============================================================

const ARABIC_LETTERS = ['أ','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','هـ','و','ي'];

// Normalize alef variants and ha variants
function normalizeFirstLetter(letter) {
  const alefVariants = ['أ','إ','آ','ا','ٱ'];
  const haVariants = ['ه','هـ','ة'];
  if (alefVariants.includes(letter)) return 'أ';
  if (haVariants.includes(letter)) return 'هـ';
  return letter;
}

function getFirstLetter(answer) {
  const cleaned = answer.replace(/^(ال|ة|ال)/,'');
  const firstChar = answer.trim()[0];
  return normalizeFirstLetter(firstChar);
}

const QUESTION_BANK = [
  // ===== Geography (جغرافيا) - 50 questions =====
  { question: "ما هي أكبر قارة في العالم؟", answer: "آسيا", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي عاصمة المملكة العربية السعودية؟", answer: "الرياض", firstLetter: "ر", category: "جغرافيا" },
  { question: "ما هو أطول نهر في العالم؟", answer: "النيل", firstLetter: "ن", category: "جغرافيا" },
  { question: "ما هي أكبر دولة في العالم من حيث المساحة؟", answer: "روسيا", firstLetter: "ر", category: "جغرافيا" },
  { question: "ما هي عاصمة فرنسا؟", answer: "باريس", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هو أعلى جبل في العالم؟", answer: "إيفرست", firstLetter: "أ", category: "جغرافيا" },
  { question: "في أي قارة تقع مصر؟", answer: "أفريقيا", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي أصغر دولة في العالم؟", answer: "الفاتيكان", firstLetter: "ف", category: "جغرافيا" },
  { question: "ما هو اسم أكبر محيط في العالم؟", answer: "الهادئ", firstLetter: "هـ", category: "جغرافيا" },
  { question: "ما هي عاصمة اليابان؟", answer: "طوكيو", firstLetter: "ط", category: "جغرافيا" },
  { question: "ما هي أكبر مدينة في العالم من حيث السكان؟", answer: "طوكيو", firstLetter: "ط", category: "جغرافيا" },
  { question: "ما هي عاصمة البرازيل؟", answer: "برازيليا", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هو أعمق بحيرة في العالم؟", answer: "بايكال", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هي عاصمة الصين؟", answer: "بكين", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما اسم أكبر صحراء في العالم؟", answer: "الصحراء الكبرى", firstLetter: "ص", category: "جغرافيا" },
  { question: "ما هي عاصمة تركيا؟", answer: "أنقرة", firstLetter: "أ", category: "جغرافيا" },
  { question: "أين تقع مدينة البندقية؟", answer: "إيطاليا", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هو اسم النهر الذي يمر بمدينة القاهرة؟", answer: "النيل", firstLetter: "ن", category: "جغرافيا" },
  { question: "ما هي عاصمة كندا؟", answer: "أوتاوا", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي أطول سلسلة جبلية في العالم؟", answer: "جبال الأنديز", firstLetter: "ج", category: "جغرافيا" },
  { question: "ما هي عاصمة ألمانيا؟", answer: "برلين", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هي عاصمة المغرب؟", answer: "الرباط", firstLetter: "ر", category: "جغرافيا" },
  { question: "في أي دولة يقع برج بيزا المائل؟", answer: "إيطاليا", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي عاصمة إسبانيا؟", answer: "مدريد", firstLetter: "م", category: "جغرافيا" },
  { question: "ما هو أصغر قارة في العالم؟", answer: "أستراليا", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي عاصمة الجزائر؟", answer: "الجزائر العاصمة", firstLetter: "ج", category: "جغرافيا" },
  { question: "ما هي عاصمة تونس؟", answer: "تونس", firstLetter: "ت", category: "جغرافيا" },
  { question: "أين تقع أهرامات الجيزة؟", answer: "مصر", firstLetter: "م", category: "جغرافيا" },
  { question: "ما هي عاصمة الإمارات العربية المتحدة؟", answer: "أبو ظبي", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي دولة الشلالات الشهيرة نياغارا؟", answer: "كندا", firstLetter: "ك", category: "جغرافيا" },
  { question: "ما هي عاصمة الهند؟", answer: "نيودلهي", firstLetter: "ن", category: "جغرافيا" },
  { question: "ما هي عاصمة روسيا؟", answer: "موسكو", firstLetter: "م", category: "جغرافيا" },
  { question: "أين تقع جزر المالديف؟", answer: "آسيا", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي عاصمة الأردن؟", answer: "عمان", firstLetter: "ع", category: "جغرافيا" },
  { question: "ما هي عاصمة الكويت؟", answer: "مدينة الكويت", firstLetter: "م", category: "جغرافيا" },
  { question: "ما هي عاصمة قطر؟", answer: "الدوحة", firstLetter: "د", category: "جغرافيا" },
  { question: "ما هي عاصمة البحرين؟", answer: "المنامة", firstLetter: "م", category: "جغرافيا" },
  { question: "ما هي عاصمة سلطنة عمان؟", answer: "مسقط", firstLetter: "م", category: "جغرافيا" },
  { question: "ما هي عاصمة اليمن؟", answer: "صنعاء", firstLetter: "ص", category: "جغرافيا" },
  { question: "ما هي عاصمة السودان؟", answer: "الخرطوم", firstLetter: "خ", category: "جغرافيا" },
  { question: "ما هي عاصمة ليبيا؟", answer: "طرابلس", firstLetter: "ط", category: "جغرافيا" },
  { question: "ما هي عاصمة العراق؟", answer: "بغداد", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هي عاصمة سوريا؟", answer: "دمشق", firstLetter: "د", category: "جغرافيا" },
  { question: "ما هي عاصمة لبنان؟", answer: "بيروت", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هي عاصمة فلسطين؟", answer: "القدس", firstLetter: "ق", category: "جغرافيا" },
  { question: "ما هي عاصمة إيران؟", answer: "طهران", firstLetter: "ط", category: "جغرافيا" },
  { question: "ما هي عاصمة أفغانستان؟", answer: "كابل", firstLetter: "ك", category: "جغرافيا" },
  { question: "ما هي عاصمة باكستان؟", answer: "إسلام آباد", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي عاصمة بنغلاديش؟", answer: "دكا", firstLetter: "د", category: "جغرافيا" },
  { question: "ما هي عاصمة تايلاند؟", answer: "بانكوك", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هي عاصمة فيتنام؟", answer: "هانوي", firstLetter: "هـ", category: "جغرافيا" },
  { question: "ما هي عاصمة ماليزيا؟", answer: "كوالالمبور", firstLetter: "ك", category: "جغرافيا" },
  { question: "ما هي عاصمة إندونيسيا؟", answer: "جاكرتا", firstLetter: "ج", category: "جغرافيا" },

  // ===== Science (علوم) - 50 questions =====
  { question: "ما هو العنصر الذي رمزه الكيميائي Fe؟", answer: "حديد", firstLetter: "ح", category: "علوم" },
  { question: "ما هو أسرع حيوان بري في العالم؟", answer: "الفهد", firstLetter: "ف", category: "علوم" },
  { question: "كم عدد الأسنان الدائمة عند الإنسان البالغ؟", answer: "اثنان وثلاثون", firstLetter: "أ", category: "علوم" },
  { question: "ما هو أكبر كوكب في المجموعة الشمسية؟", answer: "المشتري", firstLetter: "م", category: "علوم" },
  { question: "ما اسم الغاز الذي نتنفسه؟", answer: "أكسجين", firstLetter: "أ", category: "علوم" },
  { question: "ما هو الرمز الكيميائي للماء؟", answer: "H2O", firstLetter: "هـ", category: "علوم", alternateAnswers: ["هـ٢أ"] },
  { question: "من اخترع التليفون؟", answer: "بيل", firstLetter: "ب", category: "علوم" },
  { question: "ما هو أصغر كوكب في المجموعة الشمسية؟", answer: "عطارد", firstLetter: "ع", category: "علوم" },
  { question: "ما هي وحدة قياس القوة؟", answer: "نيوتن", firstLetter: "ن", category: "علوم" },
  { question: "ما اسم العلم الذي يدرس الأحياء؟", answer: "بيولوجيا", firstLetter: "ب", category: "علوم" },
  { question: "ما هو أثقل عنصر في الجدول الدوري؟", answer: "أوغانيسون", firstLetter: "أ", category: "علوم" },
  { question: "كم تستغرق الأرض للدوران حول الشمس؟", answer: "سنة", firstLetter: "س", category: "علوم" },
  { question: "ما هو الجهاز الذي يضخ الدم في جسم الإنسان؟", answer: "قلب", firstLetter: "ق", category: "علوم" },
  { question: "ما هي درجة غليان الماء؟", answer: "مئة درجة", firstLetter: "م", category: "علوم" },
  { question: "ما هو الكوكب الأحمر؟", answer: "المريخ", firstLetter: "م", category: "علوم" },
  { question: "ما اسم العالم الذي اكتشف الجاذبية؟", answer: "نيوتن", firstLetter: "ن", category: "علوم" },
  { question: "ما هو أكبر عضو في جسم الإنسان؟", answer: "الجلد", firstLetter: "ج", category: "علوم" },
  { question: "ما هي العملية التي تصنع بها النباتات غذاءها؟", answer: "البناء الضوئي", firstLetter: "ب", category: "علوم" },
  { question: "ما هو النجم الأقرب إلى الأرض؟", answer: "الشمس", firstLetter: "ش", category: "علوم" },
  { question: "كم عدد ضلوع الإنسان؟", answer: "اثنا عشر زوجاً", firstLetter: "أ", category: "علوم" },
  { question: "ما هي المادة الصلبة التي تتحول إلى سائل عند تسخينها؟", answer: "ثلج", firstLetter: "ث", category: "علوم" },
  { question: "ما هو عدد الكواكب في مجموعتنا الشمسية؟", answer: "ثمانية", firstLetter: "ث", category: "علوم" },
  { question: "ما اسم العضو الذي يصفي الدم في الجسم؟", answer: "كلية", firstLetter: "ك", category: "علوم" },
  { question: "ما هو الرمز الكيميائي للذهب؟", answer: "Au ذهب", firstLetter: "ذ", category: "علوم" },
  { question: "ما هو الغاز الذي تنتجه عملية التمثيل الضوئي؟", answer: "أكسجين", firstLetter: "أ", category: "علوم" },
  { question: "ما اسم تخصص دراسة الكواكب والنجوم؟", answer: "فلك", firstLetter: "ف", category: "علوم" },
  { question: "ما هو أقرب كوكب إلى الشمس؟", answer: "عطارد", firstLetter: "ع", category: "علوم" },
  { question: "ما هي أسرع سرعة في الكون؟", answer: "الضوء", firstLetter: "ض", category: "علوم" },
  { question: "ما هو الغاز الأكثر وفرة في الغلاف الجوي؟", answer: "نيتروجين", firstLetter: "ن", category: "علوم" },
  { question: "من هو مكتشف البنسلين؟", answer: "فلمنغ", firstLetter: "ف", category: "علوم" },
  { question: "ما هو الحيوان الذي ينام وعيناه مفتوحتان؟", answer: "السمك", firstLetter: "س", category: "علوم" },
  { question: "ما هو أطول عظمة في جسم الإنسان؟", answer: "عظم الفخذ", firstLetter: "ع", category: "علوم" },
  { question: "كم عدد عظام الإنسان البالغ؟", answer: "مئتان وستة", firstLetter: "م", category: "علوم" },
  { question: "ما هو العنصر الأساسي في الماس؟", answer: "كربون", firstLetter: "ك", category: "علوم" },
  { question: "ما هو المعدن السائل في درجة حرارة الغرفة؟", answer: "زئبق", firstLetter: "ز", category: "علوم" },
  { question: "ما هي أبرد درجة حرارة مسجلة على الأرض؟", answer: "تسعون تحت الصفر", firstLetter: "ت", category: "علوم" },
  { question: "ما هو أسرع طائر في العالم؟", answer: "صقر الشاهين", firstLetter: "ص", category: "علوم" },
  { question: "ما هو أكبر حيوان في العالم؟", answer: "الحوت الأزرق", firstLetter: "ح", category: "علوم" },
  { question: "ما هو أبطأ حيوان في العالم؟", answer: "كسلان", firstLetter: "ك", category: "علوم" },
  { question: "ما هو أخف غاز في العالم؟", answer: "هيدروجين", firstLetter: "هـ", category: "علوم" },
  { question: "من هو مكتشف قوانين الحركة الثلاثة؟", answer: "نيوتن", firstLetter: "ن", category: "علوم" },
  { question: "ما هو اسم أسرع حاسوب في العالم؟", answer: "سوبر كومبيوتر", firstLetter: "س", category: "علوم" },
  { question: "ما هو أقرب نجم إلى الأرض بعد الشمس؟", answer: "بروكسيما سنتوري", firstLetter: "ب", category: "علوم" },
  { question: "كم عدد دقائق في اليوم الواحد؟", answer: "ألف وأربعمئة وأربعون", firstLetter: "أ", category: "علوم" },
  { question: "ما هو الحيوان الذي لديه ثلاث قلوب؟", answer: "الأخطبوط", firstLetter: "أ", category: "علوم" },
  { question: "ما هو الحيوان الذي لا يشرب الماء؟", answer: "الكنغر", firstLetter: "ك", category: "علوم" },
  { question: "ما هو الشيء الذي يزداد وزنه إذا أنار عليه الضوء؟", answer: "الظل", firstLetter: "ظ", category: "علوم" },
  { question: "ما هي اللغة التي يتحدث بها الحاسوب؟", answer: "لغة الآلة", firstLetter: "ل", category: "علوم" },
  { question: "ما هي سرعة الصوت في الهواء؟", answer: "ثلاثمئة وأربعون متراً", firstLetter: "ث", category: "علوم" },

  // ===== Islamic Education (تربية إسلامية) - 40 questions =====
  { question: "ما هي أول سورة في القرآن الكريم؟", answer: "الفاتحة", firstLetter: "ف", category: "تربية إسلامية" },
  { question: "كم عدد أركان الإسلام؟", answer: "خمسة", firstLetter: "خ", category: "تربية إسلامية" },
  { question: "من هو أول الأنبياء؟", answer: "آدم عليه السلام", firstLetter: "أ", category: "تربية إسلامية" },
  { question: "ما هو الكتاب المقدس للمسلمين؟", answer: "القرآن الكريم", firstLetter: "ق", category: "تربية إسلامية" },
  { question: "كم عدد سور القرآن الكريم؟", answer: "مئة وأربع عشرة سورة", firstLetter: "م", category: "تربية إسلامية" },
  { question: "في أي مدينة وُلد النبي محمد ﷺ؟", answer: "مكة المكرمة", firstLetter: "م", category: "تربية إسلامية" },
  { question: "ما اسم زوجة النبي ﷺ الأولى؟", answer: "خديجة", firstLetter: "خ", category: "تربية إسلامية" },
  { question: "ما هو أول ركن من أركان الإسلام؟", answer: "الشهادتان", firstLetter: "ش", category: "تربية إسلامية" },
  { question: "كم عدد أشهر السنة الهجرية؟", answer: "اثنا عشر شهراً", firstLetter: "أ", category: "تربية إسلامية" },
  { question: "ما اسم الصلاة التي تُصلى في وقت الفجر؟", answer: "صلاة الفجر", firstLetter: "ص", category: "تربية إسلامية" },
  { question: "من هو أول الخلفاء الراشدين؟", answer: "أبو بكر الصديق", firstLetter: "أ", category: "تربية إسلامية" },
  { question: "ما هي القبلة التي يتجه إليها المسلمون في الصلاة؟", answer: "الكعبة المشرفة", firstLetter: "ك", category: "تربية إسلامية" },
  { question: "ما هو الشهر الذي يصوم فيه المسلمون؟", answer: "رمضان", firstLetter: "ر", category: "تربية إسلامية" },
  { question: "ما اسم أقدس مساجد الإسلام؟", answer: "المسجد الحرام", firstLetter: "م", category: "تربية إسلامية" },
  { question: "ما هي آخر سورة في القرآن الكريم؟", answer: "الناس", firstLetter: "ن", category: "تربية إسلامية" },
  { question: "كم مرة تُصلى الصلاة في اليوم؟", answer: "خمس مرات", firstLetter: "خ", category: "تربية إسلامية" },
  { question: "ما هو اسم المدينة التي هاجر إليها النبي ﷺ؟", answer: "المدينة المنورة", firstLetter: "م", category: "تربية إسلامية" },
  { question: "من هو النبي الذي بنى الكعبة؟", answer: "إبراهيم عليه السلام", firstLetter: "أ", category: "تربية إسلامية" },
  { question: "ما هو الركن الخامس من أركان الإسلام؟", answer: "الحج", firstLetter: "ح", category: "تربية إسلامية" },
  { question: "ما هي أطول سورة في القرآن الكريم؟", answer: "البقرة", firstLetter: "ب", category: "تربية إسلامية" },
  { question: "ما هي السورة التي تسمى قلب القرآن؟", answer: "سورة يس", firstLetter: "س", category: "تربية إسلامية" },
  { question: "من هو ثاني الخلفاء الراشدين؟", answer: "عمر بن الخطاب", firstLetter: "ع", category: "تربية إسلامية" },
  { question: "من هو ثالث الخلفاء الراشدين؟", answer: "عثمان بن عفان", firstLetter: "ع", category: "تربية إسلامية" },
  { question: "من هو رابع الخلفاء الراشدين؟", answer: "علي بن أبي طالب", firstLetter: "ع", category: "تربية إسلامية" },
  { question: "ما اسم أم المؤمنين عائشة؟", answer: "عائشة بنت أبي بكر", firstLetter: "ع", category: "تربية إسلامية" },
  { question: "ما هي السورة التي تسمى عروس القرآن؟", answer: "سورة الرحمن", firstLetter: "ر", category: "تربية إسلامية" },
  { question: "ما هو اليوم الذي يسمى بيوم الجمعة؟", answer: "الجمعة", firstLetter: "ج", category: "تربية إسلامية" },
  { question: "ما هو عدد أسماء الله الحسنى؟", answer: "تسعة وتسعون", firstLetter: "ت", category: "تربية إسلامية" },
  { question: "من هو النبي الذي نجا مع قومه من الطوفان؟", answer: "نوح عليه السلام", firstLetter: "ن", category: "تربية إسلامية" },
  { question: "من هو النبي الذي أُلقي في النار؟", answer: "إبراهيم عليه السلام", firstLetter: "أ", category: "تربية إسلامية" },
  { question: "من هو النبي الذي كان يأكل من ثمرة النخلة؟", answer: "مريم عليها السلام", firstLetter: "م", category: "تربية إسلامية" },
  { question: "ما هو اسم جبل الحراء؟", answer: "حراء", firstLetter: "ح", category: "تربية إسلامية" },
  { question: "ما هو أول مسجد بني في الإسلام؟", answer: "مسجد قباء", firstLetter: "ق", category: "تربية إسلامية" },
  { question: "من هو الصحابي الملقب بأسد الله؟", answer: "حمزة بن عبد المطلب", firstLetter: "ح", category: "تربية إسلامية" },
  { question: "ما هو اسم غزوة بدر الكبرى؟", answer: "بدر", firstLetter: "ب", category: "تربية إسلامية" },
  { question: "ما هو اسم السيف الذي كان يخص النبي ﷺ؟", answer: "ذو الفقار", firstLetter: "ذ", category: "تربية إسلامية" },
  { question: "كم عدد أبواب الجنة؟", answer: "ثمانية", firstLetter: "ث", category: "تربية إسلامية" },
  { question: "من هو الملك الموكّل بالوحي؟", answer: "جبريل عليه السلام", firstLetter: "ج", category: "تربية إسلامية" },
  { question: "ما هو اسم المال الذي يجب إخراجه في الإسلام؟", answer: "زكاة", firstLetter: "ز", category: "تربية إسلامية" },

  // ===== History (تاريخ) - 30 questions =====
  { question: "في أي عام اكتشف كولومبوس أمريكا؟", answer: "ألف وأربعمئة واثنان وتسعون", firstLetter: "أ", category: "تاريخ" },
  { question: "ما اسم أول إمبراطور روماني؟", answer: "أغسطس قيصر", firstLetter: "أ", category: "تاريخ" },
  { question: "في أي دولة قامت الثورة الفرنسية؟", answer: "فرنسا", firstLetter: "ف", category: "تاريخ" },
  { question: "ما هو اسم القائد الذي فتح الأندلس؟", answer: "طارق بن زياد", firstLetter: "ط", category: "تاريخ" },
  { question: "في أي عام انتهت الحرب العالمية الثانية؟", answer: "ألف وتسعمئة وخمسة وأربعون", firstLetter: "أ", category: "تاريخ" },
  { question: "من هو الفيلسوف اليوناني الشهير صاحب أكاديمية أثينا؟", answer: "أفلاطون", firstLetter: "أ", category: "تاريخ" },
  { question: "ما اسم الحضارة التي بنت الأهرامات؟", answer: "الفراعنة", firstLetter: "ف", category: "تاريخ" },
  { question: "من هو الملك الذي أصدر الماغنا كارتا؟", answer: "جون", firstLetter: "ج", category: "تاريخ" },
  { question: "في أي قرن بُنيت الأهرامات؟", answer: "ثلاثة آلاف قبل الميلاد", firstLetter: "ث", category: "تاريخ" },
  { question: "ما اسم أشهر ملوك مصر الفرعونية؟", answer: "رمسيس الثاني", firstLetter: "ر", category: "تاريخ" },
  { question: "من هو الخليفة العباسي الذي بنى بغداد؟", answer: "المنصور", firstLetter: "م", category: "تاريخ" },
  { question: "ما اسم الحضارة التي سكنت بلاد ما بين النهرين؟", answer: "السومريون", firstLetter: "س", category: "تاريخ" },
  { question: "من اخترع المطبعة؟", answer: "غوتنبرغ", firstLetter: "غ", category: "تاريخ" },
  { question: "ما هو اسم القائد المغولي الذي غزا كثيراً من الأراضي؟", answer: "جنكيز خان", firstLetter: "ج", category: "تاريخ" },
  { question: "في أي عام قامت الثورة الروسية؟", answer: "سبعة عشر وتسعمئة وألف", firstLetter: "س", category: "تاريخ" },
  { question: "ما اسم الإمبراطورية التي كانت عاصمتها القسطنطينية؟", answer: "البيزنطية", firstLetter: "ب", category: "تاريخ" },
  { question: "من هو مكتشف الأمريكتين الأوروبي الأول؟", answer: "كولومبوس", firstLetter: "ك", category: "تاريخ" },
  { question: "ما هو اسم أشهر قائد عسكري في التاريخ الفرنسي؟", answer: "نابليون", firstLetter: "ن", category: "تاريخ" },
  { question: "من هو أول رئيس للولايات المتحدة؟", answer: "واشنطن", firstLetter: "و", category: "تاريخ" },
  { question: "من هو مؤسس الدولة العثمانية؟", answer: "عثمان الأول", firstLetter: "ع", category: "تاريخ" },
  { question: "ما هو اسم معركة فتح القسطنطينية؟", answer: "الفتح العظيم", firstLetter: "ف", category: "تاريخ" },
  { question: "من هو الزعيم الذي حرر أمريكا اللاتينية؟", answer: "بوليفار", firstLetter: "ب", category: "تاريخ" },
  { question: "ما هو اسم الحضارة التي اشتهرت بالخزف؟", answer: "الصين", firstLetter: "ص", category: "تاريخ" },
  { question: "من هو أشهر ملوك الإغريق؟", answer: "الإسكندر الأكبر", firstLetter: "أ", category: "تاريخ" },
  { question: "ما هو اسم الإمبراطورية التي حكمت الهند لقرون؟", answer: "مغول الهند", firstLetter: "م", category: "تاريخ" },
  { question: "من هو مؤسس شركة مايكروسوفت؟", answer: "بيل غيتس", firstLetter: "ب", category: "تاريخ" },
  { question: "من هو مؤسس شركة أبل؟", answer: "ستيف جوبز", firstLetter: "س", category: "تاريخ" },
  { question: "من هو العالم الذي اقترح نظرية التطور؟", answer: "داروين", firstLetter: "د", category: "تاريخ" },
  { question: "في أي عام تم هدم جدار برلين؟", answer: "تسعمئة وتسعة وثمانون", firstLetter: "ت", category: "تاريخ" },

  // ===== General Culture (ثقافة عامة) - 50 questions =====
  { question: "كم عدد الألوان في قوس قزح؟", answer: "سبعة ألوان", firstLetter: "س", category: "ثقافة عامة" },
  { question: "ما هو أسرع طائر في العالم؟", answer: "صقر الشاهين", firstLetter: "ص", category: "ثقافة عامة" },
  { question: "ما هو الفاكهة ذات تاج ملكي؟", answer: "البرتقال", firstLetter: "ب", category: "ثقافة عامة" },
  { question: "كم عدد جوانب المكعب؟", answer: "ستة وجوه", firstLetter: "س", category: "ثقافة عامة" },
  { question: "ما هو اللون الناتج عن خلط الأزرق والأصفر؟", answer: "أخضر", firstLetter: "أ", category: "ثقافة عامة" },
  { question: "ما هو اللعبة التي تُلعب بـ 32 قطعة؟", answer: "شطرنج", firstLetter: "ش", category: "ثقافة عامة" },
  { question: "كم عدد الوتر في الغيتار؟", answer: "ستة", firstLetter: "س", category: "ثقافة عامة" },
  { question: "ما هي لغة برمجة المواقع الأشهر؟", answer: "جافاسكريبت", firstLetter: "ج", category: "ثقافة عامة" },
  { question: "ما هو الحيوان الأضخم في العالم؟", answer: "الحوت الأزرق", firstLetter: "ح", category: "ثقافة عامة" },
  { question: "كم عدد أيام السنة الكبيسة؟", answer: "ثلاثمئة وستة وستون يوماً", firstLetter: "ث", category: "ثقافة عامة" },
  { question: "ما هو حيوان رمز الحكمة؟", answer: "البوم", firstLetter: "ب", category: "ثقافة عامة" },
  { question: "ما هو اللون الأساسي الثالث إلى جانب الأزرق والأصفر؟", answer: "أحمر", firstLetter: "أ", category: "ثقافة عامة" },
  { question: "ما هي أداة الموسيقى ذات الأوتار الكثيرة؟", answer: "قيثارة", firstLetter: "ق", category: "ثقافة عامة" },
  { question: "كم عدد أضلاع المثلث؟", answer: "ثلاثة", firstLetter: "ث", category: "ثقافة عامة" },
  { question: "ما هو الرياضة التي تستخدم فيها المضرب والكرة الصفراء؟", answer: "تنس", firstLetter: "ت", category: "ثقافة عامة" },
  { question: "ما هو اللون المعاكس للأسود؟", answer: "أبيض", firstLetter: "أ", category: "ثقافة عامة" },
  { question: "ما هي أسرع وسيلة نقل؟", answer: "طائرة", firstLetter: "ط", category: "ثقافة عامة" },
  { question: "ما هو الشيء الذي يُستخدم لقياس درجة الحرارة؟", answer: "ميزان الحرارة", firstLetter: "م", category: "ثقافة عامة" },
  { question: "ما هي اللغة الأكثر انتشاراً في العالم؟", answer: "الإنجليزية", firstLetter: "أ", category: "ثقافة عامة" },
  { question: "كم عدد أيام الأسبوع؟", answer: "سبعة", firstLetter: "س", category: "ثقافة عامة" },
  { question: "ما هو الرياضة الوطنية في البرازيل؟", answer: "كرة القدم", firstLetter: "ك", category: "ثقافة عامة" },
  { question: "من كتب رواية ألف ليلة وليلة؟", answer: "مجهول", firstLetter: "م", category: "ثقافة عامة" },
  { question: "ما هو أطول حيوان في العالم؟", answer: "زرافة", firstLetter: "ز", category: "ثقافة عامة" },
  { question: "كم قدماً في الميل؟", answer: "خمسة آلاف وثمانمئة وثمانون قدماً", firstLetter: "خ", category: "ثقافة عامة" },
  { question: "ما هو اسم الجهاز الذي يُستخدم لرؤية الأشياء البعيدة؟", answer: "تلسكوب", firstLetter: "ت", category: "ثقافة عامة" },
  { question: "ما هو أكثر معدن انتشاراً في الأرض؟", answer: "حديد", firstLetter: "ح", category: "ثقافة عامة" },
  { question: "ما هو الكائن الوحيد الذي يطير بين الثدييات؟", answer: "خفاش", firstLetter: "خ", category: "ثقافة عامة" },
  { question: "ما هي أكبر جزيرة في العالم؟", answer: "غرينلاند", firstLetter: "غ", category: "ثقافة عامة" },
  { question: "ما هو أطول نهر في أوروبا؟", answer: "نهر الفولغا", firstLetter: "ف", category: "ثقافة عامة" },
  { question: "ما هو أعلى مبنى في العالم؟", answer: "برج خليفة", firstLetter: "ب", category: "ثقافة عامة" },
  { question: "ما هي عملة اليابان؟", answer: "ين", firstLetter: "ي", category: "ثقافة عامة" },
  { question: "ما هي عملة بريطانيا؟", answer: "جنيه إسترليني", firstLetter: "ج", category: "ثقافة عامة" },
  { question: "ما هي عملة الصين؟", answer: "يوان", firstLetter: "ي", category: "ثقافة عامة" },
  { question: "ما هي عملة سويسرا؟", answer: "فرنك", firstLetter: "ف", category: "ثقافة عامة" },
  { question: "من هو مؤلف رواية 1984؟", answer: "جورج أورويل", firstLetter: "ج", category: "ثقافة عامة" },
  { question: "من هو مؤلف رواية الجريمة والعقاب؟", answer: "دوستويفسكي", firstLetter: "د", category: "ثقافة عامة" },
  { question: "من هو مؤلف مسرحية هاملت؟", answer: "شكسبير", firstLetter: "ش", category: "ثقافة عامة" },
  { question: "من هو مؤلف كتاب ألف ليلة وليلة؟", answer: "غير معروف", firstLetter: "غ", category: "ثقافة عامة" },
  { question: "ما هي عاصمة الثقافة العربية؟", answer: "الشارقة", firstLetter: "ش", category: "ثقافة عامة" },
  { question: "ما هو اليوم العالمي للمرأة؟", answer: "الثامن من مارس", firstLetter: "ث", category: "ثقافة عامة" },
  { question: "ما هو اليوم العالمي للغة العربية؟", answer: "الثامن عشر من ديسمبر", firstLetter: "ث", category: "ثقافة عامة" },
  { question: "ما هي ساعة الأرض؟", answer: "ساعة إطفاء الأنوار", firstLetter: "س", category: "ثقافة عامة" },
  { question: "ما هو اليوم العالمي للطفل؟", answer: "العشرون من نوفمبر", firstLetter: "ع", category: "ثقافة عامة" },

  // ===== Sports (رياضة) - 25 questions =====
  { question: "كم عدد لاعبي كرة القدم في الفريق الواحد؟", answer: "أحد عشر لاعباً", firstLetter: "أ", category: "رياضة" },
  { question: "كم مدة مباراة كرة القدم؟", answer: "تسعون دقيقة", firstLetter: "ت", category: "رياضة" },
  { question: "ما هي الرياضة التي تُلعب في حمام السباحة؟", answer: "سباحة", firstLetter: "س", category: "رياضة" },
  { question: "كم عدد فرق الألعاب الأولمبية الأصلية؟", answer: "تسع عشرة رياضة", firstLetter: "ت", category: "رياضة" },
  { question: "أين تُقام الألعاب الأولمبية الأصلية؟", answer: "اليونان", firstLetter: "ي", category: "رياضة" },
  { question: "ما هو أطول سباق في ألعاب القوى؟", answer: "ماراثون", firstLetter: "م", category: "رياضة" },
  { question: "كم عدد لاعبي كرة السلة في الفريق الواحد على الملعب؟", answer: "خمسة", firstLetter: "خ", category: "رياضة" },
  { question: "ما هي الكرة التي تستخدم في رياضة الغولف؟", answer: "كرة صغيرة بيضاء", firstLetter: "ك", category: "رياضة" },
  { question: "في أي رياضة يستخدم الرياضي مضرب وريشة؟", answer: "بدمنتون", firstLetter: "ب", category: "رياضة" },
  { question: "ما هو الاسم الذي يُطلق على مسابقة التجديف؟", answer: "قوارب", firstLetter: "ق", category: "رياضة" },
  { question: "من هو أشهر لاعب كرة قدم برازيلي في التاريخ؟", answer: "بيليه", firstLetter: "ب", category: "رياضة" },
  { question: "ما هي رياضة الجودو؟", answer: "جودو فن قتالي ياباني", firstLetter: "ج", category: "رياضة" },
  { question: "من هو أفضل لاعب كرة قدم في العالم لعام 2022؟", answer: "ميسي", firstLetter: "م", category: "رياضة" },
  { question: "من هو لاعب كرة السلة الأشهر؟", answer: "مايكل جوردان", firstLetter: "م", category: "رياضة" },
  { question: "ما هي أول رياضة أدرجت في الألعاب الأولمبية؟", answer: "الجري", firstLetter: "ج", category: "رياضة" },
  { question: "ما هي الرياضة التي يطلق عليها رياضة الملوك؟", answer: "الشطرنج", firstLetter: "ش", category: "رياضة" },
  { question: "كم عدد الكؤوس التي فاز بها ريال مدريد في دوري الأبطال؟", answer: "أربعة عشر", firstLetter: "أ", category: "رياضة" },
  { question: "ما هو النادي الذي يلقب بالشياطين الحمر؟", answer: "مانشستر يونايتد", firstLetter: "م", category: "رياضة" },
  { question: "من هو بطل العالم في الفورمولا 1 عام 2023؟", answer: "فيرستابن", firstLetter: "ف", category: "رياضة" },
  { question: "ما هو النادي الذي يلقب بالكتالوني؟", answer: "برشلونة", firstLetter: "ب", category: "رياضة" },
  { question: "من هو صاحب الرقم القياسي في 100 متر؟", answer: "أوسين بولت", firstLetter: "أ", category: "رياضة" },

  // ===== Arabic Language (لغة عربية) - 20 questions =====
  { question: "ما هو جمع كلمة كتاب؟", answer: "كتب", firstLetter: "ك", category: "لغة عربية" },
  { question: "ما هو مفرد كلمة رجال؟", answer: "رجل", firstLetter: "ر", category: "لغة عربية" },
  { question: "ما هو ضد كلمة كبير؟", answer: "صغير", firstLetter: "ص", category: "لغة عربية" },
  { question: "ما هو جمع كلمة بيت؟", answer: "بيوت", firstLetter: "ب", category: "لغة عربية" },
  { question: "ما هو مؤنث كلمة ملك؟", answer: "ملكة", firstLetter: "م", category: "لغة عربية" },
  { question: "ما هو ضد كلمة نهار؟", answer: "ليل", firstLetter: "ل", category: "لغة عربية" },
  { question: "كم عدد حروف اللغة العربية؟", answer: "ثمانية وعشرون حرفاً", firstLetter: "ث", category: "لغة عربية" },
  { question: "ما هو جمع كلمة نجمة؟", answer: "نجوم", firstLetter: "ن", category: "لغة عربية" },
  { question: "ما هو ضد كلمة حلو؟", answer: "مر", firstLetter: "م", category: "لغة عربية" },
  { question: "ما هو جمع كلمة شجرة؟", answer: "أشجار", firstLetter: "أ", category: "لغة عربية" },
  { question: "ما هو مفرد كلمة أولاد؟", answer: "ولد", firstLetter: "و", category: "لغة عربية" },
  { question: "ما هو ضد كلمة سريع؟", answer: "بطيء", firstLetter: "ب", category: "لغة عربية" },
  { question: "ما هو جمع كلمة قصة؟", answer: "قصص", firstLetter: "ق", category: "لغة عربية" },
  { question: "ما هو جمع كلمة إنسان؟", answer: "ناس", firstLetter: "ن", category: "لغة عربية" },
  { question: "ما هو مفرد كلمة أنامل؟", answer: "أنملة", firstLetter: "أ", category: "لغة عربية" },
  { question: "ما هو ضد كلمة حار؟", answer: "بارد", firstLetter: "ب", category: "لغة عربية" },
  { question: "ما هو جمع كلمة معلم؟", answer: "معلمون", firstLetter: "م", category: "لغة عربية" },
  { question: "ما هو ضد كلمة طويل؟", answer: "قصير", firstLetter: "ق", category: "لغة عربية" },
  { question: "ما هو جمع كلمة حذاء؟", answer: "أحذية", firstLetter: "أ", category: "لغة عربية" },

  // ===== Technology (تكنولوجيا) - 20 questions =====
  { question: "ما هي اختصار WWW في عناوين الإنترنت؟", answer: "شبكة الويب العالمية", firstLetter: "ش", category: "تكنولوجيا" },
  { question: "من هو مؤسس شركة أبل؟", answer: "ستيف جوبز", firstLetter: "س", category: "تكنولوجيا" },
  { question: "ما هي أول لغة برمجة في التاريخ؟", answer: "فورتران", firstLetter: "ف", category: "تكنولوجيا" },
  { question: "ما هو اسم أشهر محرك بحث في العالم؟", answer: "جوجل", firstLetter: "ج", category: "تكنولوجيا" },
  { question: "ما هو نظام تشغيل الهواتف الذكية من شركة أبل؟", answer: "iOS", firstLetter: "أ", category: "تكنولوجيا" },
  { question: "من اخترع شبكة الإنترنت؟", answer: "تيم بيرنرز-لي", firstLetter: "ت", category: "تكنولوجيا" },
  { question: "ما هو الرقم الأساسي الذي يُبنى عليه الكمبيوتر؟", answer: "ثنائي رقم صفر وواحد", firstLetter: "ث", category: "تكنولوجيا" },
  { question: "ما هو اسم أكبر شركة في مجال البرمجيات؟", answer: "مايكروسوفت", firstLetter: "م", category: "تكنولوجيا" },
  { question: "ما هو اختصار PDF؟", answer: "بي دي إف تنسيق وثيقة محمول", firstLetter: "ب", category: "تكنولوجيا" },
  { question: "ما هو نظام التشغيل الذي طورته شركة جوجل للهواتف؟", answer: "أندرويد", firstLetter: "أ", category: "تكنولوجيا" },
  { question: "ما هي أول شركة صنعت معالج Intel؟", answer: "إنتل", firstLetter: "إ", category: "تكنولوجيا" },
  { question: "من هو مؤسس فيسبوك؟", answer: "مارك زوكربيرغ", firstLetter: "م", category: "تكنولوجيا" },
  { question: "ما هو أشهر موقع لتداول الفيديوهات؟", answer: "يوتيوب", firstLetter: "ي", category: "تكنولوجيا" },
  { question: "ما هو اسم أول هاتف ذكي من أبل؟", answer: "آيفون", firstLetter: "أ", category: "تكنولوجيا" },
  { question: "ما هو اختصار RAM؟", answer: "ذاكرة الوصول العشوائي", firstLetter: "ذ", category: "تكنولوجيا" },
  { question: "ما هو اسم مساعد أبل الصوتي؟", answer: "سيري", firstLetter: "س", category: "تكنولوجيا" },
  { question: "ما هو اسم مساعد أمازون الصوتي؟", answer: "أليكسا", firstLetter: "أ", category: "تكنولوجيا" },
  { question: "ما هي دولة التي يوجد بها أكبر شركات التكنولوجيا؟", answer: "الولايات المتحدة", firstLetter: "أ", category: "تكنولوجيا" },

  // ===== Nature & Animals (طبيعة وحيوانات) - 20 questions =====
  { question: "كم عدد أرجل النحلة؟", answer: "ستة", firstLetter: "س", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان الذي يُعرف بحيوان الصحراء السفينة؟", answer: "جمل", firstLetter: "ج", category: "طبيعة وحيوانات" },
  { question: "ما هو أكبر ثدييات يعيش على الأرض؟", answer: "فيل", firstLetter: "ف", category: "طبيعة وحيوانات" },
  { question: "ما هو الطائر الذي لا يستطيع الطيران في القطب الجنوبي؟", answer: "بطريق", firstLetter: "ب", category: "طبيعة وحيوانات" },
  { question: "كم عدد أرجل العنكبوت؟", answer: "ثمانية", firstLetter: "ث", category: "طبيعة وحيوانات" },
  { question: "ما هو اسم صوت الأسد؟", answer: "زئير", firstLetter: "ز", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان الذي يُعرف بملك الغابة؟", answer: "أسد", firstLetter: "أ", category: "طبيعة وحيوانات" },
  { question: "ما هو أكبر الطيور حجماً؟", answer: "نعامة", firstLetter: "ن", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان المائي ذو الخيوط الطويلة التي تلسع؟", answer: "قنديل البحر", firstLetter: "ق", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان الذي يستطيع تغيير لونه؟", answer: "حرباء", firstLetter: "ح", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان الذي يحمل صغيره في جيبه؟", answer: "كنغر", firstLetter: "ك", category: "طبيعة وحيوانات" },
  { question: "ما هو أبطأ حيوان في العالم؟", answer: "كسلان", firstLetter: "ك", category: "طبيعة وحيوانات" },
  { question: "ما هو أكبر الثدييات البحرية؟", answer: "حوت أزرق", firstLetter: "ح", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان الذي ينام واقفاً؟", answer: "الحصان", firstLetter: "ح", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان الذي يلد ويبيض؟", answer: "خلد الماء", firstLetter: "خ", category: "طبيعة وحيوانات" },
  { question: "ما هو الحيوان الأكثر ذكاءً بعد الإنسان؟", answer: "الدلفين", firstLetter: "د", category: "طبيعة وحيوانات" },
  { question: "ما هو أسرع حيوان بحري؟", answer: "سمكة أبو شراع", firstLetter: "س", category: "طبيعة وحيوانات" },
  { question: "ما هو أكبر زاحف في العالم؟", answer: "تمساح الماء المالح", firstLetter: "ت", category: "طبيعة وحيوانات" },
  { question: "ما هو أصغر الطيور في العالم؟", answer: "طائر الطنان", firstLetter: "ط", category: "طبيعة وحيوانات" },

  // ===== Arts & Culture (فنون وثقافة) - 15 questions =====
  { question: "من رسم لوحة الموناليزا؟", answer: "ليوناردو دافنشي", firstLetter: "ل", category: "فنون وثقافة" },
  { question: "من كتب قصيدة البردة؟", answer: "البوصيري", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "من هو الشاعر العربي الملقب بأمير الشعراء؟", answer: "أحمد شوقي", firstLetter: "أ", category: "فنون وثقافة" },
  { question: "من هو كاتب رواية ألف شمس مشرقة؟", answer: "خالد حسيني", firstLetter: "خ", category: "فنون وثقافة" },
  { question: "من هو أشهر موسيقار ألماني كلاسيكي؟", answer: "بيتهوفن", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "ما هي أشهر رواية لنجيب محفوظ؟", answer: "ثلاثية القاهرة", firstLetter: "ث", category: "فنون وثقافة" },
  { question: "من هو الفنان التشكيلي الإسباني الأشهر؟", answer: "بيكاسو", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "ما هي الرواية التي كتبها غابرييل غارسيا ماركيز؟", answer: "مئة عام من العزلة", firstLetter: "م", category: "فنون وثقافة" },
  { question: "من كتب مسرحية هاملت؟", answer: "شكسبير", firstLetter: "ش", category: "فنون وثقافة" },
  { question: "ما هو النوع الموسيقي الذي يُعبر عن الحزن في الثقافة الأمريكية؟", answer: "بلوز", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "في أي مدينة تُعقد مهرجانات البندقية السينمائي؟", answer: "البندقية", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "من هو الفنان العالمي المعروف برسمه للفن التجريدي؟", answer: "بولوك", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "من هو مؤلف رواية البؤساء؟", answer: "فيكتور هوجو", firstLetter: "ف", category: "فنون وثقافة" },
  { question: "من هو مؤلف رواية الحرب والسلام؟", answer: "تولستوي", firstLetter: "ت", category: "فنون وثقافة" },
  { question: "ما هي أشهر مسرحية لتوفيق الحكيم؟", answer: "أهل الكهف", firstLetter: "أ", category: "فنون وثقافة" },

  // ===== Food & Cuisine (غذاء ومطبخ) - 15 questions =====
  { question: "ما هو أصل تشيز بيتزا؟", answer: "إيطاليا", firstLetter: "أ", category: "غذاء ومطبخ" },
  { question: "ما هي التوابل الصفراء الشهيرة المستخدمة في الكاري؟", answer: "كركم", firstLetter: "ك", category: "غذاء ومطبخ" },
  { question: "من أين يأتي الشوكولاتة أصلاً؟", answer: "المكسيك", firstLetter: "م", category: "غذاء ومطبخ" },
  { question: "ما هي أشهر حلويات مصر؟", answer: "كنافة", firstLetter: "ك", category: "غذاء ومطبخ" },
  { question: "ما هي الفاكهة الاستوائية ذات الشوك من الخارج والحلاوة من الداخل؟", answer: "أناناس", firstLetter: "أ", category: "غذاء ومطبخ" },
  { question: "ما هو المشروب الذي يُصنع من تخمير العنب؟", answer: "خل العنب", firstLetter: "خ", category: "غذاء ومطبخ" },
  { question: "ما هو الخضار الذي يُستخرج منه زيت الزيتون؟", answer: "زيتون", firstLetter: "ز", category: "غذاء ومطبخ" },
  { question: "ما هو الحبوب التي تُصنع منها معظم أنواع الخبز؟", answer: "قمح", firstLetter: "ق", category: "غذاء ومطبخ" },
  { question: "ما هو التفاح المجفف يسمى؟", answer: "تمر هندي", firstLetter: "ت", category: "غذاء ومطبخ" },
  { question: "ما هي نوعية السمك الشهيرة في السوشي؟", answer: "سلمون", firstLetter: "س", category: "غذاء ومطبخ" },
  { question: "ما هي أشهر حلوى فرنسية؟", answer: "كروا سون", firstLetter: "ك", category: "غذاء ومطبخ" },
  { question: "ما هو الطبق الوطني في إسبانيا؟", answer: "الباييلا", firstLetter: "ب", category: "غذاء ومطبخ" },
  { question: "ما هو المشروب الوطني في تركيا؟", answer: "الشاي التركي", firstLetter: "ش", category: "غذاء ومطبخ" },
  { question: "ما هو نوع الجبن الذي يأتي من إيطاليا؟", answer: "بارميزان", firstLetter: "ب", category: "غذاء ومطبخ" },
  { question: "ما هي الفاكهة التي تحتوي على أكبر قدر من فيتامين سي؟", answer: "جوافة", firstLetter: "ج", category: "غذاء ومطبخ" }
];

// ============================================================
// QUESTION MANAGEMENT CLASS
// ============================================================

class QuestionManager {
  constructor() {
    this.questions = QUESTION_BANK;
    this.usedQuestions = new Set();
    this.recentLetters = [];
  }

  // Get questions whose firstLetter is still available (not won by any team)
  getAvailableQuestions(wonLetters = []) {
    return this.questions.filter(q => {
      if (wonLetters.includes(q.firstLetter)) return false;
      if (this.usedQuestions.has(q.question)) return false;
      return true;
    });
  }

  // Get a random question, prioritizing letters not recently used
  getRandomQuestion(wonLetters = [], category = null) {
    let pool = this.getAvailableQuestions(wonLetters);

    if (category && category !== 'all') {
      const filtered = pool.filter(q => q.category === category);
      if (filtered.length > 0) pool = filtered;
    }

    if (pool.length === 0) {
      // Reset if exhausted
      this.usedQuestions.clear();
      pool = this.getAvailableQuestions(wonLetters);
    }

    if (pool.length === 0) return null;

    // Prefer questions with letters not recently used
    const preferred = pool.filter(q => !this.recentLetters.includes(q.firstLetter));
    const finalPool = preferred.length > 0 ? preferred : pool;

    const idx = Math.floor(Math.random() * finalPool.length);
    const question = finalPool[idx];

    this.usedQuestions.add(question.question);
    this.recentLetters.push(question.firstLetter);
    if (this.recentLetters.length > 5) this.recentLetters.shift();

    return question;
  }

  // Get question by specific first letter
  getQuestionForLetter(letter, wonLetters = []) {
    const pool = this.questions.filter(q => 
      q.firstLetter === letter && 
      !this.usedQuestions.has(q.question) &&
      !wonLetters.includes(q.firstLetter)
    );
    if (pool.length === 0) return null;
    const idx = Math.floor(Math.random() * pool.length);
    const question = pool[idx];
    this.usedQuestions.add(question.question);
    return question;
  }

  // Get all categories
  getCategories() {
    return [...new Set(this.questions.map(q => q.category))];
  }

  // Check if an answer matches (with normalization)
  checkAnswer(userAnswer, question) {
    const normalize = (str) => str.trim().toLowerCase()
      .replace(/^(ال|ة)/g, '')
      .replace(/[أإآا]/g, 'ا')
      .replace(/[هة]/g, 'ه');

    const normalized = normalize(userAnswer);
    const correct = normalize(question.answer);

    if (normalized === correct) return true;
    if (correct.includes(normalized) && normalized.length >= 3) return true;

    if (question.alternateAnswers) {
      return question.alternateAnswers.some(alt => normalize(alt) === normalized);
    }
    return false;
  }
}

// Export for use in other files
if (typeof module !== 'undefined') module.exports = { QUESTION_BANK, QuestionManager, ARABIC_LETTERS, normalizeFirstLetter };
