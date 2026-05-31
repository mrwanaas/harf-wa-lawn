// ============================================================
// ARABIC QUESTION BANK - 200+ Questions
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
  // ===== جغرافيا =====
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

  // ===== علوم =====
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

  // ===== تربية إسلامية =====
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

  // ===== تاريخ =====
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

  // ===== ثقافة عامة =====
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

  // ===== رياضة =====
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

  // ===== لغة عربية =====
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

  // ===== تكنولوجيا =====
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

  // ===== طبيعة وحيوانات =====
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
  { question: "ما هو الزهرة الوطنية لهولندا؟", answer: "زهرة التوليب", firstLetter: "ز", category: "طبيعة وحيوانات" },
  { question: "ما هو أبطأ حيوان في العالم؟", answer: "كسلان", firstLetter: "ك", category: "طبيعة وحيوانات" },
  { question: "ما هو أكبر الثدييات البحرية؟", answer: "حوت أزرق", firstLetter: "ح", category: "طبيعة وحيوانات" },

  // ===== فنون وثقافة =====
  { question: "من رسم لوحة الموناليزا؟", answer: "ليوناردو دافنشي", firstLetter: "ل", category: "فنون وثقافة" },
  { question: "ما هي أشهر أوبرا في العالم؟", answer: "دار الأوبرا في ميلانو", firstLetter: "د", category: "فنون وثقافة" },
  { question: "من كتب قصيدة البردة؟", answer: "البوصيري", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "من هو الشاعر العربي الملقب بأمير الشعراء؟", answer: "أحمد شوقي", firstLetter: "أ", category: "فنون وثقافة" },
  { question: "من هو كاتب رواية ألف شمس مشرقة؟", answer: "خالد حسيني", firstLetter: "خ", category: "فنون وثقافة" },
  { question: "من هو أشهر موسيقار ألماني كلاسيكي؟", answer: "بيتهوفن", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "ما هي أشهر رواية لنجيب محفوظ؟", answer: "ثلاثية القاهرة", firstLetter: "ث", category: "فنون وثقافة" },
  { question: "من هو الفنان التشكيلي الإسباني الأشهر؟", answer: "بيكاسو", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "ما هي الرواية التي كتبها غابرييل غارسيا ماركيز؟", answer: "مئة عام من العزلة", firstLetter: "م", category: "فنون وثقافة" },
  { question: "من كتب مسرحية هاملت؟", answer: "شكسبير", firstLetter: "ش", category: "فنون وثقافة" },
  { question: "ما هو النوع الموسيقى الذي يُعبر عن الحزن في الثقافة الأمريكية؟", answer: "بلوز", firstLetter: "ب", category: "فنون وثقافة" },
  { question: "في أي مدينة تُعقد مهرجانات البندقية السينمائي؟", answer: "البندقية", firstLetter: "ب", category: "فنون وثقافة" },

  // ===== غذاء ومطبخ =====
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

  // ===== المزيد من جغرافيا وعلوم وثقافة =====
  { question: "ما هو اسم القمر الصناعي الذي تمتلكه الأرض؟", answer: "القمر", firstLetter: "ق", category: "علوم" },
  { question: "ما هي درجة التجمد للماء؟", answer: "صفر درجة مئوية", firstLetter: "ص", category: "علوم" },
  { question: "ما هو الكوكب الأقرب للشمس؟", answer: "عطارد", firstLetter: "ع", category: "علوم" },
  { question: "ما هو رمز الذهب في الجدول الدوري؟", answer: "ذهب رمزه Au", firstLetter: "ذ", category: "علوم" },
  { question: "من طور نظرية النسبية؟", answer: "إينشتاين", firstLetter: "أ", category: "علوم" },
  { question: "ما هو اللغة الرسمية للبرازيل؟", answer: "برتغالية", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هي دولة برج إيفل؟", answer: "فرنسا", firstLetter: "ف", category: "جغرافيا" },
  { question: "ما هي عاصمة أستراليا؟", answer: "كانبيرا", firstLetter: "ك", category: "جغرافيا" },
  { question: "أين يقع جبل كليمنجارو؟", answer: "تنزانيا", firstLetter: "ت", category: "جغرافيا" },
  { question: "ما هي أكبر جزيرة في العالم؟", answer: "غرينلاند", firstLetter: "غ", category: "جغرافيا" },
  { question: "ما هو اسم النهر الأطول في أمريكا الشمالية؟", answer: "ميسيسيبي", firstLetter: "م", category: "جغرافيا" },
  { question: "في أي دولة يقع مدينة دبي؟", answer: "الإمارات", firstLetter: "أ", category: "جغرافيا" },
  { question: "ما هي عاصمة الهند؟", answer: "نيودلهي", firstLetter: "ن", category: "جغرافيا" },
  { question: "ما هو أعمق نقطة في المحيطات؟", answer: "خندق ماريانا", firstLetter: "خ", category: "جغرافيا" },
  { question: "ما هي أكبر مدينة في إفريقيا؟", answer: "لاغوس", firstLetter: "ل", category: "جغرافيا" },

  // ===== إضافي متنوع =====
  { question: "ما هو عدد الساعات في اليوم؟", answer: "أربع وعشرون", firstLetter: "أ", category: "ثقافة عامة" },
  { question: "ما هو الشهر الأول في السنة الميلادية؟", answer: "يناير", firstLetter: "ي", category: "ثقافة عامة" },
  { question: "كم عدد أشهر السنة الميلادية؟", answer: "اثنا عشر شهراً", firstLetter: "أ", category: "ثقافة عامة" },
  { question: "ما هو الشيء الذي يتساقط في الشتاء ويذوب في الربيع؟", answer: "ثلج", firstLetter: "ث", category: "ثقافة عامة" },
  { question: "ما هو أكبر عدد في نظام الأرقام العشرية�ذو رقم واحد؟", answer: "تسعة", firstLetter: "ت", category: "ثقافة عامة" },
  { question: "ما هي نتيجة ضرب اثنين في خمسة؟", answer: "عشرة", firstLetter: "ع", category: "ثقافة عامة" },
  { question: "ما هو الشكل الهندسي ذو الأربعة أضلاع المتساوية والزوايا القائمة؟", answer: "مربع", firstLetter: "م", category: "ثقافة عامة" },
  { question: "ما هو الخط الوهمي الذي يقسم الأرض إلى نصفين؟", answer: "خط الاستواء", firstLetter: "خ", category: "جغرافيا" },
  { question: "ما هي السرعة التي تسير بها الضوء؟", answer: "ثلاثمئة ألف كيلومتر في الثانية", firstLetter: "ث", category: "علوم" },
  { question: "ما هو اسم الظاهرة التي تجعل السماء زرقاء؟", answer: "تشتت رايلي", firstLetter: "ت", category: "علوم" },
  { question: "ما هو عدد أصابع يد الإنسان؟", answer: "خمسة أصابع", firstLetter: "خ", category: "علوم" },
  { question: "ما هو أصغر دولة عربية مساحةً؟", answer: "البحرين", firstLetter: "ب", category: "جغرافيا" },
  { question: "ما هي أكبر دولة عربية مساحةً؟", answer: "الجزائر", firstLetter: "ج", category: "جغرافيا" },
  { question: "ما هو الحد الفاصل بين المحيط الأطلسي والمحيط الهندي؟", answer: "رأس الرجاء الصالح", firstLetter: "ر", category: "جغرافيا" },
  { question: "ما هي أشهر مباني الصين التاريخية؟", answer: "سور الصين العظيم", firstLetter: "س", category: "تاريخ" },
  { question: "ما هو شعار الصليب الأحمر؟", answer: "صليب أحمر على خلفية بيضاء", firstLetter: "ص", category: "ثقافة عامة" },
  { question: "ما هو مقياس قوة الزلازل؟", answer: "ريختر", firstLetter: "ر", category: "علوم" },
  { question: "كم يبلغ طول نهر الأمازون تقريباً؟", answer: "ستة آلاف كيلومتر", firstLetter: "س", category: "جغرافيا" },
  { question: "ما هي نوع الطاقة التي تولدها ألواح شمسية؟", answer: "طاقة شمسية كهربائية", firstLetter: "ط", category: "علوم" },
  { question: "من اكتشف عنصر الراديوم؟", answer: "ماري كوري", firstLetter: "م", category: "علوم" },
  { question: "ما هي المادة الكيميائية المعروفة بـ NaCl؟", answer: "ملح الطعام", firstLetter: "م", category: "علوم" },
  { question: "ما هو حيوان رمز الولايات المتحدة الأمريكية؟", answer: "نسر أصلع", firstLetter: "ن", category: "ثقافة عامة" },
  { question: "ما هو أكبر عضو داخلي في الجسم؟", answer: "كبد", firstLetter: "ك", category: "علوم" },
  { question: "ما هي دولة ابتكار رياضة الكريكيت؟", answer: "إنجلترا", firstLetter: "أ", category: "رياضة" },
  { question: "ما هو الحجر الكريم الذي تشتهر به الهند؟", answer: "ياقوت", firstLetter: "ي", category: "ثقافة عامة" },
  { question: "ما هو الغاز المسؤول عن ظاهرة الاحتباس الحراري؟", answer: "ثاني أكسيد الكربون", firstLetter: "ث", category: "علوم" },
  { question: "ما هو العام الذي انتهت فيه الخلافة العثمانية؟", answer: "ألف وتسعمئة وثلاثة وعشرون", firstLetter: "أ", category: "تاريخ" },
  { question: "ما هو الدين الرسمي في المملكة العربية السعودية؟", answer: "الإسلام", firstLetter: "أ", category: "تربية إسلامية" },
  { question: "ما هو العلم الذي يدرس عقل الإنسان وسلوكه؟", answer: "علم النفس", firstLetter: "ع", category: "علوم" },
  { question: "ما هو العلم الذي يدرس المجتمعات البشرية؟", answer: "علم الاجتماع", firstLetter: "ع", category: "علوم" },
  { question: "ما هو اسم العملة الرسمية لليابان؟", answer: "ين", firstLetter: "ي", category: "ثقافة عامة" },
  { question: "ما هو اسم العملة الرسمية لأوروبا؟", answer: "يورو", firstLetter: "ي", category: "ثقافة عامة" },
  { question: "ما هو الحيوان الذي يرمز لدولة أستراليا؟", answer: "كنغر", firstLetter: "ك", category: "ثقافة عامة" },
  { question: "ما هي أشهر حلوى فرنسية؟", answer: "كروا سون", firstLetter: "ك", category: "غذاء ومطبخ" },
  { question: "ما هو الوقود الذي تعمل عليه السيارات التقليدية؟", answer: "بنزين", firstLetter: "ب", category: "علوم" },
  { question: "ما هي لغة الأرقام العالمية؟", answer: "رياضيات", firstLetter: "ر", category: "علوم" },
  { question: "ما هي عاصمة كوريا الجنوبية؟", answer: "سيول", firstLetter: "س", category: "جغرافيا" },
  { question: "أين تقع مدينة الإسكندرية؟", answer: "مصر", firstLetter: "م", category: "جغرافيا" },
  { question: "ما هو أكبر محيط في العالم؟", answer: "الهادئ", firstLetter: "هـ", category: "جغرافيا" },
  { question: "ما هو الحيوان الأسرع في البحر؟", answer: "سمكة الأبرة", firstLetter: "س", category: "طبيعة وحيوانات" },
  { question: "ما هو ثمر الكاكاو؟", answer: "شوكولاتة", firstLetter: "ش", category: "غذاء ومطبخ" },
  { question: "ما هو الوقت الذي يبدأ فيه الفجر الصادق؟", answer: "قبيل الشروق", firstLetter: "ق", category: "تربية إسلامية" },
  { question: "ما هو الجزء من النبات الذي يمتص الماء من التربة؟", answer: "جذور", firstLetter: "ج", category: "علوم" },
  { question: "ما هو الكوكب المعروف بحلقاته؟", answer: "زحل", firstLetter: "ز", category: "علوم" },
  { question: "ما هي الاسم الأصلي للتايكوندو كرياضة؟", answer: "تايكوندو فن قتالي كوري", firstLetter: "ت", category: "رياضة" },
  { question: "ما هو عدد نجوم العلم الأمريكي؟", answer: "خمسون نجمة", firstLetter: "خ", category: "ثقافة عامة" },
  { question: "ما هي أقصر كلمة في القرآن الكريم؟", answer: "ن - حرف واحد", firstLetter: "ن", category: "تربية إسلامية" }
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
