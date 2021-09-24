

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"welcome":"Welcome","loan_manager":"Loan Manager","id":"ID","index":"SL","installment_list":"Installment List","installment_amount":"Installment Amount","installment_quantity":"Installment Quantity","borrower":"Borrower","borrower_list":"Borrower List","name":"Name","fathers_name":"Father's Name","mothers_name":"Mother's Name","date_of_birth":"Date of Birth","phone":"Phone","borrower_details":"Borrower Details","borrowers":"Borrowers","search_borrowers":"Search Borrowers","account":"Account","accounts":"Accounts","account_list":"Account List","account_details":"Account Details","account_no":"Account No","account_name":"Account Name","loan":"Loan","loans":"Loans","loan_list":"Loan List","loan_details":"Loan Details","loan_amount":"Loan Amount","due_amount":"Due Amount","disbursement_date":"Disbursement Date","date":"Date","closing_date":"Closing Date","last_collection_date":"Last Collection Date","previous_debt":"Previous Debt","collection_amount":"Collection Amount","amount":"Amount","amounts":"Amounts","type":"Type","current_debt":"Current Debt","payment_method":"Method","datatable_footer_left_title":"Showing {from} items from {to} to {count} of {total}","status":"Status","cash":"Cash","bCash":"bCash","bank":"Bank","search":"Search","reset":"Reset","Take Installment":"Take Installment","submit":"SUBMIT","Search Account":"Search Account","installment":"Installment","installments":"Installments","ok":"Ok","cancel":"Cancel","back":"Back","Installment Details":"Installment Details","active":"Active","created_at":"Created At","account_opening_date":"Opening Date","opening_date":"Opening Date","account_closing_date":"Closing Date","is_active":"Active ?","view":"View","edit":"Edit","delete":"Delete","description":"Description","nid":"NID","spouse_name":"Spouse Name","gender":"Gender","present_division":"Present Division","present_district":"Present District","present_upazila":"Present Upazila","present_thana":"Present Thana","present_village":"Present Village","permanent_division":"Permanent Division","permanent_district":"Permanent District","permanent_upazila":"Permanent Upazila","permanent_thana":"Permanent Thana","permanent_village":"Permanent Village","email":"Email","photo":"Photo","updated_at":"Updated At","deleted_at":"Deleted At","users":"Users","user_list":"User List","user_details":"User Details","password":"Password","share":"Share","saving":"Saving","combo":"Combo","yes":"Yes","no":"No","simple":"Simple","inactive":"Inactive","closed":"Closed","defaulted":"Defaulted","mobile":"Mobile","card":"Card","male":"Male","female":"Female","others":"Others"},"bn":{"welcome":"Bienvenido","loan_manager":"ঋণ ব্যবস্থাপনা","id":"আইডি","index":"ক্রঃ নং","installment_list":"কিস্তি তালিকা","installment_amount":"কিস্তির পরিমান","installment_quantity":"কিস্তি সংখ্যা","borrower":"গ্রহীতা","borrower_list":"গ্রাহকের তালিকা","name":"নাম","fathers_name":"পিতার নাম","mothers_name":"মাতার নাম","date_of_birth":"জন্ম তারিখ","phone":"ফোন","borrower_details":"গ্রাহকের বিস্তারিত","borrowers":"গ্রাহকের তালিকা","search_borrowers":"গ্রহীতা খুঁজুন","account_details":"হিসাবের বিবরণ","account":"হিসাব","accounts":"হিসাব সমূহ","account_list":"হিসাবের তালিকা","type":"ধরণ","account_no":"হিসাব নং","account_name":"হিসাবের নাম","loan":"ঋণ","loans":"ঋণ সমূহ","loan_list":"ঋণের তালিকা","loan_details":"ঋণের বিস্তারিত","loan_amount":"ঋণের পরিমান","due_amount":"বকেয়া ঋণ","disbursement_date":"বিতরণের তারিখ","date":"তারিখ","closing_date":"বন্ধের তারিখ","last_collection_date":"সর্বশেষ আদায়ের তারিখ","previous_debt":"পূর্বের জের","collection_amount":"আদায়ের পরিমান","amount":"পরিমান","current_debt":"বর্তমান জের","payment_method":"পদ্ধতি","datatable_footer_left_title":"সর্বমোট {total} টি হতে {from} থেকে {to} পর্যন্ত মোট {count} টি দেখানো হচ্ছে","status":"অবস্থা","cash":"নগদ","bCash":"বিকাশ","bank":"ব্যাংক","search":"খুঁজুন","reset":"রিসেট করুন","Take Installment":"কিস্তি আদায়","submit":"সাবমিট করুন","Search Account":"হিসাব খুঁজুন","installment":"কিস্তি","installments":"কিস্তি সমূহ","ok":"আচ্ছা","cancel":"বাতিল","back":"ফিরে যান","Installment Details":"কিস্তি তথ্য","active":"চলমান","created_at":"তৈরির সময়","account_opening_date":"হিসাব খোলার তারিখ","opening_date":"হিসাব খোলার তারিখ","account_closing_date":"হিসাব বন্ধের তারিখ","is_active":"সচল?","view":"বিস্তারিত দেখুন","edit":"সংশোধন করুন","delete":"মুছে ফেলুন","description":"বর্ণনা","nid":"জাতীয় পরিচয় পত্র নং","spouse_name":"স্বামী/স্ত্রীর নাম","gender":"লিঙ্গ","present_division":"বর্তমান বিভাগ","present_district":"বর্তমান জেলা","present_upazila":"বর্তমান উপজেলা","present_thana":"বর্তমান থানা","present_village":"বর্তমান গ্রাম","permanent_division":"স্থায়ী বিভাগ","permanent_district":"স্থায়ী জেলা","permanent_upazila":"স্থায়ী উপজেলা","permanent_thana":"স্থায়ী থানা","permanent_village":"স্থায়ী গ্রাম","email":"ইমেইল","photo":"ফটো","updated_at":"সম্পাদনের সময়","deleted_at":"ডিলিটের সময়","users":"ব্যবহারকারীর তালিকা","user_list":"ব্যবহারকারীর তালিকা","user_details":"ব্যবহারকারীর বিস্তারিত","password":"পাসওয়ার্ড","share":"অংশীদার","saving":"সঞ্চয়","combo":"সমন্বিত","yes":"হ্যাঁ","no":"না","simple":"সাধারণ","inactive":"অচল","closed":"বন্ধ","defaulted":"খেলাফি","mobile":"মোবাইল","card":"কার্ড","male":"পুরুষ","female":"নারী","others":"অন্যান্য"}},"currency":{"style":"currency","currency":"BDT","currencyDisplay":"symbol"}},
  vueI18nLoader: false,
  locales: ["en","bn"],
  defaultLocale: "bn",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en"},{"code":"bn"}],
  localeCodes: ["en","bn"],
}

export const localeMessages = {}
