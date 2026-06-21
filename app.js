/**
 * TurkRef — app.js v6.0
 * =====================
 * 100% Client-Side · Stateless · Air-Gapped
 * Manual RST Discourse Tagging Workbench (Nucleus-Satellite Model)
 *
 * Zero network requests. All processing in browser RAM.
 * Data destroyed on tab close.
 */

"use strict";

// ---------------------------------------------------------------------------
// §1. Translation Tables
// ---------------------------------------------------------------------------
const TRANSLATIONS = {
    TR: {
        // ── Legal Modal ─────────────────────────────────────────────────
        legalTitle: "Açık Kaynak Kullanım ve Veri Gizliliği Koşulları",
        legalSubtitle: "TurkRef Etiketleme Laboratuvarına erişmeden önce lütfen kullanım şartlarını inceleyiniz.",
        privacyTitle: "Gizlilik Politikası — Sıfır Veri / %100 İstemci Mimarisi",
        privacyBody: "TurkRef tamamen çevrimdışı (Zero-Backend) çalışır. Girdiğiniz metinler hiçbir sunucuya iletilmez ve yalnızca tarayıcınızın anlık belleğinde (RAM) işlenir. Ancak <strong>v1.0 sürümüne özgü olarak</strong>, arayüz kütüphaneleri dış sağlayıcılardan (Cloudflare, jsDelivr vb.) yüklenmektedir. Bu CDN sunucuları kendi gizlilik politikaları gereği standart IP logları tutabilir. Geliştirici ekip, bu 3. taraf bağımlılıkların veri işleme pratiklerinden sorumlu tutulamaz; lütfen uygulamayı kullanırken bu harici bağlantıların varlığını göz önünde bulundurun.",
        disclaimerTitle: "Kapsamlı Sorumluluk Reddi Beyanı",
        disclaimerBody: "Bu yazılım 'manuel' bir RST etiketleme tezgahıdır. Araç otomatik dilbilimsel sonuç üretmez; tüm bağlantılar kullanıcının kendi seçimidir. Geliştirici ekip, sonuçların doğruluğunu veya olası veri kayıplarını garanti etmez ve uygulamanın kullanımından doğabilecek hiçbir doğrudan/dolaylı zarardan sorumlu tutulamaz.",
        nonCommTitle: "Korumalı Açık Kaynak ve Akademik Kullanım",
        nonCommBody: "TurkRef; kaynak kodları, mimari altyapısı ve dil bilimsel iş akışları Apache License 2.0 modeliyle güvenceye alınmış bağımsız açık kaynaklı bir projedir. Bu yazılım üzerinden üretilen analizlerin tüm mülkiyeti ve sorumluluğu kullanıcıya aittir. Kaynak kodların asıl geliştirici hakları saklı kalmak kaydıyla, bilimsel ve akademik amaçlar doğrultusunda herkes tarafından ücretsiz olarak incelenebilir ve kaynak gösterilerek (attribution) kullanılabilir.",
        acceptBtn: "Okudum, Kabul Ediyorum",
        devTeamTitle: "Geliştirici Ekip",
        devTeamLabel: "Geliştirici Ekip:",
        roleAdvisor: "Akademik Danışman",
        roleArchitect: "Yazılım Mimarı",
        roleResearcher: "Araştırmacı / Dilbilimci",
        eulaWarning: "⚠️ ÖNEMLİ: Devam ederek bu yazılımı Apache 2.0 lisans koşullarına ve telif bildirimlerine uygun olarak çalıştıracağınızı, sistemde işlediğiniz verilerin yerel güvenliğinden tamamen kendi çalışma istasyonunuzun sorumlu olduğunu kabul etmiş sayılırsınız.",
        thirdPartyNotice: '<div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 0.85rem; color: #64748b; line-height: 1.4;"><strong>Açık Kaynak Bileşenler (Third-Party Components):</strong><br>TurkRef mimarisi aşağıdaki açık kaynaklı kütüphanelerle desteklenmektedir:<br>• <em>SheetJS Community Edition</em> (Apache License 2.0) - Copyright &copy; SheetJS LLC<br>• <em>LeaderLine</em> (MIT License) - Copyright &copy; anseki<br>• <em>Font Awesome</em> (MIT License) - Copyright &copy; Fonticons, Inc.<br>Detaylı lisans metinleri projenin <code>NOTICE.txt</code> dosyasında yer almaktadır.</div>',
        // ── App Header & Nav ────────────────────────────────────────────
        appSubtitle: "Manuel RST Söylem Etiketleme Çalışma Masası",
        navDashboard: "Etiketleme Laboratuvarı",

        // ── Panel 1 ─────────────────────────────────────────────────────
        panel1Title: "Metin Girişi",
        clearBtn: "Temizle",
        inputPlaceholder: "Analiz edilecek Türkçe metni buraya giriniz...",
        sampleLabel: "Örnek Edebi Metin:",
        sampleDefault: "-- Seçiniz --",
        sampleCustom: "Özel Örnek",
        analyzeBtn: "Cümleleri Ayır",
        analyzingBtn: "İşleniyor...",
        emptyState: "Henüz metin işlenmedi.",

        // ── Panel 2 ─────────────────────────────────────────────────────
        panel2Title: "RST Çalışma Alanı",
        resetBtn: "Sıfırla",
        undoBtn: "Geri Al",
        statusReady: "Hazır",
        canvasHint: "İki cümleye sırayla tıklayarak RST ilişkisi oluşturun.",

        // ── Panel 3 ─────────────────────────────────────────────────────
        panel3Title: "Etiketleme Detayları",
        wordAnalysisTitle: "Bağlantılar",
        wordAnalysisEmpty: "Henüz bağlantı oluşturulmadı.",
        nodeDetailTitle: "Seçili Cümle",
        nodeDetailEmpty: "Çalışma alanından bir cümleye tıklayın.",

        // ── Relation Popup ──────────────────────────────────────────────
        popupTitle: "İlişki Türünü Seçin",
        popupRoleLabel: "Çekirdek-Uydu Yönü:",
        popupRoleSatNuc: "A (Uydu) → B (Çekirdek)",
        popupRoleNucSat: "A (Çekirdek) ← B (Uydu)",
        popupRoleMulti: "Çok Çekirdekli",

        // ── Coreference (Gönderim) Module ───────────────────────────────
        modeRST: "RST Analizi",
        modeCoref: "Gönderim",
        corefCanvasHint: "İki kelimeye tıklayarak gönderim ilişkisi oluşturun.",
        corefPopupTitle: "Gönderim Türünü Seçin",
        corefPanel2Title: "Gönderim Çalışma Alanı",
        corefWordAnalysisTitle: "Gönderim Bağlantıları",
        corefWordAnalysisEmpty: "Henüz gönderim bağlantısı oluşturulmadı.",
        corefResetConfirm: "Gönderim bağlantıları silinecektir. Emin misiniz?",
        exportNoData: "Dışa aktarılacak veri yok. Önce etiketleme yapınız.",
        corefPopupLink: "Bağla",
        corefPopupCancel: "İptal",
        dispersionTitle: "Sözcük Dağılım Grafiği:",
        plotStart: "Metin Başı",
        plotEnd: "Metin Sonu",
        popupRoleJoint: "Joint (Ortaklık)",
        popupCancel: "İptal",
        popupLink: "Bağla",

        // ── Print / Export ──────────────────────────────────────────────
        printOriginal: "Orijinal Metin",
        printEdus: "Cümleler",
        printAnnotations: "RST Bağlantıları",

        // ── Errors ──────────────────────────────────────────────────────
        errorEmpty: "Lütfen metin giriniz.",
        errorTooLong: "Metin 40.000 karakteri aşamaz.",
        errorNoSentences: "Cümle bulunamadı.",
        errorNoConnections: "Henüz bağlantı yok. Önce etiketleme yapınız.",
        errorLibMissing: "Gerekli kütüphane yüklenemedi.",
        removeLabel: "Kaldır",
        statsTitle: "Analiz İstatistikleri",
        statsEmpty: "Henüz veri yok.",
        statsTotal: "Toplam",
        sentenceLabel: "Cümle",
        nucleusLabel: "Çekirdek",
        satelliteLabel: "Uydu",
        alertMobile: "TurkRef, masaüstü ortamı için optimize edilmiştir. Lütfen GitHub Releases üzerinden Desktop (EXE) sürümünü indirin.",
        alertWeb: "Web demo sürümü. Tam özellikli ve güvenli masaüstü uygulaması için GitHub üzerinden TurkRef Desktop (EXE) indirin.",
        resetConfirm: "Çalışma alanındaki tüm bağlantılar silinecektir. Emin misiniz?",
        resetConfirmTitle: "Emin misiniz?",
    },

    EN: {
        // ── Legal Modal ─────────────────────────────────────────────────
        legalTitle: "Open-Source Use & Data Privacy Terms",
        legalSubtitle: "Please review the terms before accessing the TurkRef Tagging Laboratory.",
        privacyTitle: "Privacy Policy — Zero-Data / 100% Client-Side Architecture",
        privacyBody: "TurkRef operates entirely offline (Zero-Backend). The texts you enter are never transmitted to any server and are processed solely in your browser's volatile memory (RAM). However, <strong>specifically for version 1.0</strong>, interface libraries are loaded from external providers (Cloudflare, jsDelivr, etc.). These CDN servers may keep standard IP logs per their own policies. The development team is not liable for the data practices of these 3rd-party dependencies; please be aware of these external connections when using the application.",
        disclaimerTitle: "Comprehensive Disclaimer of Liability",
        disclaimerBody: "This software is a 'manual' RST tagging workbench. The tool does not produce automatic linguistic results; all connections are the user's own choice. The development team does not guarantee the accuracy of results or potential data loss, and cannot be held liable for any direct or indirect damages arising from the use of this application.",
        nonCommTitle: "Protected Open-Source & Academic Use",
        nonCommBody: "TurkRef is an independent open-source project whose architectural source code and linguistic workflows are governed under the Apache License 2.0. Users retain full ownership and responsibility of the datasets generated. The code is publicly available for examination and utility in scientific and academic workflows, strictly preserving original developer notices and copyright attributions.",
        acceptBtn: "I Have Read & Accept",
        devTeamTitle: "Development Team",
        devTeamLabel: "Development Team:",
        roleAdvisor: "Academic Advisor",
        roleArchitect: "Software Architect",
        roleResearcher: "Researcher / Linguist",
        eulaWarning: "⚠️ IMPORTANT: By continuing, you agree to utilize this workbench in strict compliance with Apache 2.0 open-source terms and acknowledge that your local workstation is solely responsible for the security of the processed data.",
        thirdPartyNotice: '<div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 0.85rem; color: #64748b; line-height: 1.4;"><strong>Third-Party Components:</strong><br>TurkRef architecture is supported by the following open-source libraries:<br>• <em>SheetJS Community Edition</em> (Apache License 2.0) - Copyright &copy; SheetJS LLC<br>• <em>LeaderLine</em> (MIT License) - Copyright &copy; anseki<br>• <em>Font Awesome</em> (MIT License) - Copyright &copy; Fonticons, Inc.<br>Detailed license texts are available in the project\'s <code>NOTICE.txt</code> file.</div>',
        // ── App Header & Nav ────────────────────────────────────────────
        appSubtitle: "Manual RST Discourse Tagging Workbench",
        navDashboard: "Tagging Laboratory",

        // ── Panel 1 ─────────────────────────────────────────────────────
        panel1Title: "Text Input",
        clearBtn: "Clear",
        inputPlaceholder: "Enter the Turkish text to be analysed here...",
        sampleLabel: "Sample Literary Text:",
        sampleDefault: "-- Select --",
        sampleCustom: "Custom Sample",
        analyzeBtn: "Split Sentences",
        analyzingBtn: "Processing...",
        emptyState: "No text processed yet.",

        // ── Panel 2 ─────────────────────────────────────────────────────
        panel2Title: "RST Workspace",
        resetBtn: "Reset",
        undoBtn: "Undo",
        statusReady: "Ready",
        canvasHint: "Click two sentences in sequence to create an RST relation.",

        // ── Panel 3 ─────────────────────────────────────────────────────
        panel3Title: "Tagging Details",
        wordAnalysisTitle: "Connections",
        wordAnalysisEmpty: "No connections yet.",
        nodeDetailTitle: "Selected Sentence",
        nodeDetailEmpty: "Click a sentence in the workspace.",

        // ── Relation Popup ──────────────────────────────────────────────
        popupTitle: "Select Relation Type",
        popupRoleLabel: "Nucleus-Satellite Direction:",
        popupRoleSatNuc: "A (Satellite) → B (Nucleus)",
        popupRoleNucSat: "A (Nucleus) ← B (Satellite)",
        popupRoleMulti: "Multi-nuclear",
        popupRoleJoint: "Joint",
        popupCancel: "Cancel",
        popupLink: "Link",

        // ── Print / Export ──────────────────────────────────────────────
        printOriginal: "Original Text",
        printEdus: "Sentences",
        printAnnotations: "RST Connections",

        // ── Errors ──────────────────────────────────────────────────────
        errorEmpty: "Please enter some text.",
        errorTooLong: "Text must not exceed 40,000 characters.",
        errorNoSentences: "No sentences found.",
        errorNoConnections: "No connections yet. Please tag first.",
        errorLibMissing: "Required library could not be loaded.",
        removeLabel: "Remove",
        statsTitle: "Analysis Statistics",
        statsEmpty: "No data yet.",
        statsTotal: "Total",
        sentenceLabel: "Sentence",
        nucleusLabel: "Nucleus",
        satelliteLabel: "Satellite",
        alertMobile: "TurkRef is optimized for desktop. Please download the Desktop (EXE) version from GitHub Releases.",
        alertWeb: "Web demo. For the fully secure offline app, download TurkRef Desktop (EXE) from GitHub.",
        resetConfirm: "All connections in the workspace will be deleted. Are you sure?",
        resetConfirmTitle: "Are you sure?",

        // ── Coreference (Gönderim) Module ───────────────────────────────
        modeRST: "RST Analysis",
        modeCoref: "Coreference",
        corefCanvasHint: "Click two words to create a coreference relation.",
        corefPopupTitle: "Select Coreference Type",
        corefPanel2Title: "Coreference Workspace",
        corefWordAnalysisTitle: "Coreference Connections",
        corefWordAnalysisEmpty: "No coreference connections yet.",
        corefResetConfirm: "Coreference connections will be deleted. Are you sure?",
        exportNoData: "No data to export. Please tag first.",
        corefPopupLink: "Link",
        corefPopupCancel: "Cancel",
        dispersionTitle: "Lexical Dispersion Plot:",
        plotStart: "Text Start",
        plotEnd: "Text End",
    },
};

// RST Relations — based on Table 1 from the paper
const RST_RELATIONS = [
    { value: "EkBilgi", tr: "Ek Bilgi", en: "Elaboration" },
    { value: "NedenSonuc", tr: "Neden-Sonuç", en: "Cause-Effect" },
    { value: "Yorum", tr: "Yorum", en: "Interpretation" },
    { value: "Ikna", tr: "İkna", en: "Persuasion" },
    { value: "Yineleme", tr: "Yineleme", en: "Restatement" },
    { value: "Kosul", tr: "Koşul", en: "Condition" },
    { value: "Karsilastirma", tr: "Karşılaştırma", en: "Contrast" },
    { value: "Siralama", tr: "Sıralama", en: "Sequence" },
    { value: "Joint", tr: "Joint", en: "Joint" },
    { value: "Background", tr: "Arka Plan", en: "Background" },
];

// Coreference (Gönderim) Types — Art/Ön/İç/Dış Gönderim (with semantic colors)
const COREF_TYPES = [
    { value: "ArtGonderim",  tr: "Art Gönderim",  en: "Anaphora",  color: "#9b59b6" },
    { value: "OnGonderim",   tr: "Ön Gönderim",   en: "Cataphora", color: "#3498db" },
    { value: "IcGonderim",   tr: "İç Gönderim",   en: "Endophora", color: "#2ecc71" },
    { value: "DisGonderim",  tr: "Dış Gönderim",  en: "Exophora",  color: "#e67e22" },
];

// ---------------------------------------------------------------------------
// §2. Application State
// ---------------------------------------------------------------------------
let currentLang = "TR";
let confirmActionCallback = null;

const appState = {
    currentMode: "rst",          // "rst" | "coref"
    sentences: [],               // [{ id, text }, ...]

    // ── RST State ──────────────────────────────────────────────────────
    selectedNodes: [],           // [nodeId, nodeId] — max 2
    connections: [],             // [{ sourceId, targetId, sourceText, targetText, relation, role, nucleusId, satelliteId }]
    leaderLines: [],             // LeaderLine instances (RST)

    // ── Coreference State ──────────────────────────────────────────────
    coref_selectedWords: [],     // [{ wordId, wordText }, ...] — max 2
    coref_connections: [],       // [{ id, sourceWordId, targetWordId, type, sourceText, targetText }]
    coref_leaderLines: [],       // LeaderLine instances (Coreference)
    coref_nextId: 1,             // Auto-increment ID for coref connections
};

// ---------------------------------------------------------------------------
// §3. Initialisation
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const browserLang = (navigator.language || "tr").toUpperCase().startsWith("TR") ? "TR" : "EN";
    let isAccepted = false;
    try {
        const raw = sessionStorage.getItem("turkref_legal_v2");
        if (raw && JSON.parse(raw).status === "accepted") isAccepted = true;
    } catch (_) { }

    setLanguage(browserLang, false);

    if (isAccepted) {
        hideLegalOverlay();
    } else {
        document.getElementById("privacy-overlay").style.display = "flex";
    }

    loadLangFromStorage();

    // ── Hide dispersion plot on init (default mode = RST) ───────────────
    const dispInit = document.getElementById("dispersion-wrapper");
    if (dispInit) dispInit.style.display = 'none';

    // ── CSP-compliant event bindings ────────────────────────────────────
    const _b = (id, ev, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(ev, fn);
    };
    const _q = (sel, ev, fn) => {
        const el = document.querySelector(sel);
        if (el) el.addEventListener(ev, fn);
    };

    _b("modal-btn-tr", "click", () => setLanguage("TR"));
    _b("modal-btn-en", "click", () => setLanguage("EN"));
    _b("accept-btn", "click", () => acceptLegal());
    _b("header-btn-tr", "click", () => setLanguage("TR"));
    _b("header-btn-en", "click", () => setLanguage("EN"));
    _b("sampleDropdown", "change", () => loadSelectedSample());
    _b("analyzeBtn", "click", () => analyzeText());
    _q(".icon-btn", "click", () => clearText());
    _b("resetBtn", "click", () => {
        const t = TRANSLATIONS[currentLang];
        const msg = appState.currentMode === "coref" ? t.corefResetConfirm : t.resetConfirm;
        showCustomConfirm(msg, () => resetConnections());
    });
    _b("undoBtn", "click", () => undoLastConnection());

    // ── Mode toggle event bindings ──────────────────────────────────────
    _b("mode-rst", "click", () => switchMode("rst"));
    _b("mode-coref", "click", () => switchMode("coref"));

    _b("custom-confirm-cancel", "click", hideCustomConfirm);
    _b("custom-confirm-ok", "click", () => {
        if (confirmActionCallback) confirmActionCallback();
        hideCustomConfirm();
    });

    const exportBtns = document.querySelectorAll(".btn-export");
    if (exportBtns[0]) exportBtns[0].addEventListener("click", () => exportXLSX());
    if (exportBtns[1]) exportBtns[1].addEventListener("click", () => exportPDF());

    // ── Statistics accordion toggle ─────────────────────────────────────
    _b("statsToggle", "click", () => {
        const header = document.getElementById("statsToggle");
        const content = document.getElementById("statsContent");
        if (header && content) {
            header.classList.toggle("open");
            content.classList.toggle("open");
        }
    });

    // ── Dismiss popup on outside click (both RST and Coref) ─────────────
    document.addEventListener("click", (e) => {
        const rstPopup = document.getElementById("rst-relation-popup");
        if (rstPopup && !rstPopup.contains(e.target) && !e.target.classList.contains("rst-node")) {
            hideRelationPopup();
            clearSelection();
        }
        const corefPopup = document.getElementById("coref-relation-popup");
        if (corefPopup && !corefPopup.contains(e.target) && !e.target.classList.contains("coref-word")) {
            hideCorefPopup();
            clearCorefSelection();
        }
    });

    // ── Reposition arrows on window resize ──────────────────────────────
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(repositionArrows, 100);
    });

    // ── Reposition arrows on workspace scroll (debounced via rAF) ────────
    const workspace = document.getElementById("manual-workspace");
    let scrollTicking = false;
    if (workspace) {
        workspace.addEventListener("scroll", () => {
            if (!scrollTicking) {
                window.requestAnimationFrame(() => {
                    repositionArrows();
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        });
    }

    // ── Keyboard shortcut: Ctrl+Z / Cmd+Z → Undo last connection ────────
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "z") {
            e.preventDefault();
            undoLastConnection();
        }
    });

    // ── Smart Alert Banner — platform detection ─────────────────────────
    initSmartAlertBanner();

    // ── Auto-Recovery: Restore saved session from LocalStorage ───────────
    loadAppStateFromLocalStorage();
});

// ---------------------------------------------------------------------------
// §4. i18n Engine
// ---------------------------------------------------------------------------
function setLanguage(lang, saveToStorage = true) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    const t = TRANSLATIONS[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && Object.prototype.hasOwnProperty.call(t, key)) {
            el.textContent = t[key];
        }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (key && Object.prototype.hasOwnProperty.call(t, key)) el.placeholder = t[key];
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
        const key = el.getAttribute("data-i18n-title");
        if (key && Object.prototype.hasOwnProperty.call(t, key)) el.title = t[key];
    });

    const defaultOpt = document.querySelector("#sampleDropdown option[data-i18n='sampleDefault']");
    if (defaultOpt) defaultOpt.textContent = t.sampleDefault;
    const customOpt = document.querySelector("#sampleDropdown option[data-i18n='sampleCustom']");
    if (customOpt) customOpt.textContent = t.sampleCustom;

    document.getElementById("html-root").lang = lang === "TR" ? "tr" : "en";

    ["modal", "header"].forEach((prefix) => {
        const btnTR = document.getElementById(`${prefix}-btn-tr`);
        const btnEN = document.getElementById(`${prefix}-btn-en`);
        if (!btnTR || !btnEN) return;
        btnTR.classList.toggle("active", lang === "TR");
        btnEN.classList.toggle("active", lang === "EN");
    });

    if (saveToStorage) {
        try { sessionStorage.setItem("turkref_lang", lang); } catch (_) { }
    }

    if (appState.sentences.length === 0) {
        const seg = document.getElementById("segmentList");
        if (seg) seg.innerHTML = `<div class="empty-state">${esc(t.emptyState)}</div>`;
    }

    // Privacy body — sanitized innerHTML from hardcoded dev string (contains <strong> tags)
    const privacyBodyEl = document.getElementById('privacyBodyText'); if (privacyBodyEl) privacyBodyEl.innerHTML = safeHTML(t.privacyBody);

    // Third-party notice — sanitized innerHTML from hardcoded dev string
    const noticeContainer = document.getElementById('thirdPartyNoticeContainer'); if (noticeContainer) noticeContainer.innerHTML = safeHTML(t.thirdPartyNotice);

    // GÖREV 4: Banner dilini güncelle
    updateSmartBannerLanguage();

    // Update mode-specific UI labels for current language
    if (typeof updateModeUI === "function") {
        updateModeUI(appState.currentMode);
    }
}

// ---------------------------------------------------------------------------
// §5. Legal Modal
// ---------------------------------------------------------------------------
function acceptLegal() {
    const payload = { status: "accepted", ts: Date.now() };
    sessionStorage.setItem("turkref_legal_v2", JSON.stringify(payload));
    hideLegalOverlay();
}

function hideLegalOverlay() {
    const overlay = document.getElementById("privacy-overlay");
    if (!overlay) return;
    overlay.classList.add("overlay-fade-out");
    setTimeout(() => {
        overlay.style.display = "none";
        overlay.classList.remove("overlay-fade-out");
    }, 400);
}

// ---------------------------------------------------------------------------
// §5b. Custom Confirmation Modal
// ---------------------------------------------------------------------------
function showCustomConfirm(text, callback) {
    const modal = document.getElementById("custom-confirm-modal");
    const textEl = document.getElementById("custom-confirm-text");
    if (!modal || !textEl) return;
    textEl.textContent = text;
    confirmActionCallback = callback;
    modal.style.display = "block";
}

function hideCustomConfirm() {
    const modal = document.getElementById("custom-confirm-modal");
    if (modal) modal.style.display = "none";
    confirmActionCallback = null;
}

// ---------------------------------------------------------------------------
// §6. Sample Texts
// ---------------------------------------------------------------------------
const SAMPLE_TEXTS = {
    nutuk: "Büyük Millet Meclisi'nin açılışı, Türk milletinin bağımsızlık mücadelesinde çok önemli bir adımdır. Çünkü bu meclis, milletin iradesini temsil eder. Dolayısıyla egemenlik, kayıtsız şartsız milletindir. Bu ilke, Cumhuriyetimizin temel taşıdır.",
    kasagi: "Zeynep, evin kapısında durmuş, içeriye bakıyordu. O, başını önüne eğmişti. Çünkü utanıyordu. Ama yine de girmek zorundaydı. Bu ev, onun tek sığınağıydı.",
    custom: "Ahmet eve geldi. Çünkü çok yorgundu. Hemen uyudu. Sabah uyandığında kendisini çok dinlenmiş hissetti.",
};

function loadSelectedSample() {
    const val = document.getElementById("sampleDropdown").value;
    if (val && Object.prototype.hasOwnProperty.call(SAMPLE_TEXTS, val)) {
        document.getElementById("inputText").value = SAMPLE_TEXTS[val];
    }
}

// ---------------------------------------------------------------------------
// §7. Core — Client-Side Sentence Splitting
// ---------------------------------------------------------------------------
function analyzeText() {
    const text = document.getElementById("inputText").value;
    const t = TRANSLATIONS[currentLang];

    if (!text.trim()) { showError(t.errorEmpty); return; }
    if (text.length > 40000) { showError(t.errorTooLong); return; }

    const btn = document.getElementById("analyzeBtn");
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${esc(t.analyzingBtn)}`;

    fullReset();

    let raw;
    try {
        raw = text.trim().split(/(?<=[.!?])\s+/);
    } catch (_) {
        // Eski tarayıcılarda Regex çökmesini engeller
        const DELIM = '\uE000';
        raw = text.trim().replace(/([.!?])\s+/g, '$1' + DELIM).split(DELIM);
    }
    appState.sentences = raw
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map((s, i) => ({ id: i + 1, text: s }));

    setTimeout(() => {
        if (appState.sentences.length === 0) {
            showError(t.errorNoSentences);
        } else {
            renderSentenceList(appState.sentences);
            // Render workspace based on active mode
            if (appState.currentMode === "coref") {
                renderCorefWorkspace(appState.sentences);
            } else {
                renderWorkspace(appState.sentences);
            }
            const hint = document.getElementById("canvasInstruction");
            if (hint) {
                hint.textContent = appState.currentMode === "coref" ? t.corefCanvasHint : t.canvasHint;
                hint.style.display = "block";
            }
            saveAppStateToLocalStorage();
        }
        btn.disabled = false;
        btn.innerHTML = `<i class="fas fa-magic"></i> ${esc(t.analyzeBtn)}`;
    }, 250);
}

// ---------------------------------------------------------------------------
// §8. Rendering
// ---------------------------------------------------------------------------

/** Panel 1 — numbered sentence reference list */
function renderSentenceList(sentences) {
    const list = document.getElementById("segmentList");
    const t = TRANSLATIONS[currentLang];
    list.innerHTML = "";

    if (!sentences || sentences.length === 0) {
        list.innerHTML = `<div class="empty-state">${esc(t.errorNoSentences)}</div>`;
        return;
    }

    sentences.forEach((s) => {
        const div = document.createElement("div");
        div.className = "edu-item";
        div.id = `seg-${s.id}`;
        div.innerHTML = `<strong>[${s.id}]</strong> ${esc(s.text)}`;
        div.addEventListener("click", () => {
            document.querySelectorAll(".edu-item").forEach(el => el.classList.remove("highlighted"));
            div.classList.add("highlighted");
            showSentenceDetail(s);
        });
        list.appendChild(div);
    });
}

/** Panel 2 — interactive sentence rows with separate number badges for arrow anchoring */
function renderWorkspace(sentences) {
    const workspace = document.getElementById("manual-workspace");
    workspace.innerHTML = "";
    // Override the inline styles that were set for the old layout
    workspace.style.lineHeight = "normal";
    workspace.style.textAlign = "left";

    sentences.forEach((s) => {
        // Row container
        const row = document.createElement("div");
        row.className = "sentence-row";

        // Number badge — LeaderLine arrows connect HERE
        const numBadge = document.createElement("div");
        numBadge.className = "rst-num";
        numBadge.id = `num-${s.id}`;
        numBadge.textContent = `[${s.id}]`;

        // Text node — clickable for selection
        const textSpan = document.createElement("div");
        textSpan.className = "rst-node";
        textSpan.id = `node-${s.id}`;
        textSpan.setAttribute("data-index", s.id);
        textSpan.innerHTML = esc(s.text);
        textSpan.addEventListener("click", (e) => {
            e.stopPropagation();
            onNodeClick(s.id);
        });

        row.appendChild(numBadge);
        row.appendChild(textSpan);
        workspace.appendChild(row);
    });
}

/** Update badges on workspace nodes after linking */
function updateNodeBadges() {
    // Clear all badges first
    document.querySelectorAll(".rst-node .role-badge").forEach(b => b.remove());

    // Build role map: nodeId → Set of roles
    const roleMap = {};
    appState.connections.forEach(conn => {
        if (conn.nucleusId) {
            if (!roleMap[conn.nucleusId]) roleMap[conn.nucleusId] = new Set();
            roleMap[conn.nucleusId].add("nucleus");
        }
        if (conn.satelliteId) {
            if (!roleMap[conn.satelliteId]) roleMap[conn.satelliteId] = new Set();
            roleMap[conn.satelliteId].add("satellite");
        }
    });

    const t = TRANSLATIONS[currentLang];
    Object.entries(roleMap).forEach(([nodeId, roles]) => {
        const el = document.getElementById(`node-${nodeId}`);
        if (!el) return;

        roles.forEach(role => {
            const badge = document.createElement("span");
            badge.className = "role-badge";
            if (role === "nucleus") {
                badge.textContent = "(Ç)";
                badge.title = t.nucleusLabel;
                badge.style.cssText = "display:inline-block;margin-left:4px;padding:1px 5px;border-radius:3px;font-size:.7rem;font-weight:700;background:#dbeafe;color:#1e40af;vertical-align:middle;";
            } else {
                badge.textContent = "(U)";
                badge.title = t.satelliteLabel;
                badge.style.cssText = "display:inline-block;margin-left:4px;padding:1px 5px;border-radius:3px;font-size:.7rem;font-weight:700;background:#fef9c3;color:#854d0e;vertical-align:middle;";
            }
            el.appendChild(badge);
        });
    });
}

/** Panel 3 — connections list */
function renderConnectionsList() {
    const container = document.getElementById("word-analysis-content");
    const t = TRANSLATIONS[currentLang];
    container.innerHTML = "";

    if (appState.connections.length === 0) {
        container.innerHTML = `<span class="text-muted">${esc(t.wordAnalysisEmpty)}</span>`;
        return;
    }

    appState.connections.forEach((conn, idx) => {
        const div = document.createElement("div");
        div.className = "token-card";

        const srcP = conn.sourceText.length > 30 ? conn.sourceText.substring(0, 30) + "…" : conn.sourceText;
        const tgtP = conn.targetText.length > 30 ? conn.targetText.substring(0, 30) + "…" : conn.targetText;

        // Display relation in current language
        const relObj = RST_RELATIONS.find(r => r.value === conn.relation);
        const relDisplay = relObj ? (currentLang === "TR" ? relObj.tr : relObj.en) : conn.relation;

        // Role display
        let roleDisplay = "";
        if (conn.role === "sat-nuc") roleDisplay = `[${conn.sourceId}] (U) → [${conn.targetId}] (Ç)`;
        else if (conn.role === "nuc-sat") roleDisplay = `[${conn.sourceId}] (Ç) ← [${conn.targetId}] (U)`;
        else if (conn.role === "joint") roleDisplay = `[${conn.sourceId}] - [${conn.targetId}] (Joint)`;
        else roleDisplay = `[${conn.sourceId}] ↔ [${conn.targetId}] (Multi)`;

        div.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong>${esc(roleDisplay)}</strong>
                <span class="badge anaphora">${esc(relDisplay)}</span>
            </div>
            <div style="font-size:.85rem;color:#64748B;margin-top:4px;">
                ${esc(srcP)} → ${esc(tgtP)}
            </div>`;

        const removeBtn = document.createElement("button");
        removeBtn.style.cssText = "margin-top:6px;color:#ef4444;cursor:pointer;background:none;border:none;font-size:.8rem;font-family:'Inter',sans-serif;";
        removeBtn.innerHTML = `<i class="fas fa-trash"></i> ${esc(t.removeLabel)}`;
        removeBtn.addEventListener("click", () => removeConnection(idx));
        div.appendChild(removeBtn);

        container.appendChild(div);
    });
}

/** Panel 3 — selected sentence info */
function showSentenceDetail(sentence) {
    const box = document.getElementById("node-details");
    const t = TRANSLATIONS[currentLang];
    box.innerHTML = `
        <div style="margin-bottom:8px;">
            <strong>[${sentence.id}]</strong>
            <span class="badge anaphora" style="margin-left:8px;">${esc(t.sentenceLabel)}</span>
        </div>
        <p class="serif-text" style="font-size:.95rem;color:#475569;margin:0;">${esc(sentence.text)}</p>`;
}

// ---------------------------------------------------------------------------
// §9. Node Interaction
// ---------------------------------------------------------------------------
function onNodeClick(nodeId) {
    const clickedEl = document.getElementById(`node-${nodeId}`);
    if (!clickedEl) return;

    // Toggle-off if clicking already selected
    const idx = appState.selectedNodes.indexOf(nodeId);
    if (idx !== -1) {
        appState.selectedNodes.splice(idx, 1);
        clickedEl.style.background = "";
        clickedEl.style.borderColor = "transparent";
        return;
    }

    // Clear if already two
    if (appState.selectedNodes.length >= 2) clearSelection();

    // Select
    appState.selectedNodes.push(nodeId);

    if (appState.selectedNodes.length === 1) {
        clickedEl.style.background = "#bfdbfe";
        clickedEl.style.borderColor = "#3b82f6";
    } else {
        clickedEl.style.background = "#bbf7d0";
        clickedEl.style.borderColor = "#22c55e";
    }

    // Show detail
    const sentence = appState.sentences.find(s => s.id === nodeId);
    if (sentence) showSentenceDetail(sentence);

    // Two selected → show popup
    if (appState.selectedNodes.length === 2) {
        showRelationPopup(appState.selectedNodes[0], appState.selectedNodes[1], clickedEl);
    }
}

function clearSelection() {
    appState.selectedNodes.forEach(id => {
        const el = document.getElementById(`node-${id}`);
        if (el) {
            el.style.background = "";
            el.style.borderColor = "transparent";
        }
    });
    appState.selectedNodes = [];
    hideRelationPopup();
}

// ---------------------------------------------------------------------------
// §10. Relation Popup (with Nucleus-Satellite role selection)
// ---------------------------------------------------------------------------
function showRelationPopup(sourceId, targetId, anchorEl) {
    hideRelationPopup();
    const t = TRANSLATIONS[currentLang];

    const popup = document.createElement("div");
    popup.id = "rst-relation-popup";
    popup.style.cssText = `
        position: fixed; z-index: 10000;
        background: rgba(15,23,42,0.96);
        backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 14px; padding: 18px 20px;
        min-width: 300px; max-width: 380px;
        box-shadow: 0 24px 48px rgba(0,0,0,0.45);
        color: #f1f5f9; font-family: 'Inter', sans-serif;
    `;

    // Build relation options in current language
    const opts = RST_RELATIONS.map(r => {
        const label = currentLang === "TR" ? r.tr : r.en;
        return `<option value="${esc(r.value)}">${esc(label)}</option>`;
    }).join("");

    // Select styles — dark text on light bg to fix hover contrast
    const selectStyle = `
        width:100%;padding:8px 10px;border-radius:8px;
        border:1px solid rgba(255,255,255,0.15);
        background:#f8fafc;color:#1e293b;
        font-size:.9rem;margin-bottom:14px;font-family:'Inter',sans-serif;outline:none;
    `;

    // Radio option style
    const radioLabelStyle = `display:block;padding:5px 0;font-size:.85rem;cursor:pointer;color:#cbd5e1;`;

    popup.innerHTML = `
        <div style="font-weight:600;margin-bottom:12px;font-size:.95rem;">${esc(t.popupTitle)}</div>
        <div style="font-size:.8rem;color:#94a3b8;margin-bottom:10px;">[${sourceId}] → [${targetId}]</div>

        <select id="popup-rel-select" style="${selectStyle}">${opts}</select>

        <div style="margin-bottom:14px;">
            <div style="font-size:.8rem;font-weight:600;color:#94a3b8;margin-bottom:6px;">${esc(t.popupRoleLabel)}</div>
            <label style="${radioLabelStyle}">
                <input type="radio" name="popup-role" value="sat-nuc" checked style="margin-right:6px;accent-color:#3b82f6;">
                ${esc(t.popupRoleSatNuc)}
            </label>
            <label style="${radioLabelStyle}">
                <input type="radio" name="popup-role" value="nuc-sat" style="margin-right:6px;accent-color:#3b82f6;">
                ${esc(t.popupRoleNucSat)}
            </label>
            <label style="${radioLabelStyle}">
                <input type="radio" name="popup-role" value="multi" style="margin-right:6px;accent-color:#3b82f6;">
                ${esc(t.popupRoleMulti)}
            </label>
            <label style="${radioLabelStyle}">
                <input type="radio" name="popup-role" value="joint" style="margin-right:6px;accent-color:#3b82f6;">
                ${esc(t.popupRoleJoint)}
            </label>
        </div>

        <div style="display:flex;gap:8px;">
            <button id="popup-cancel" style="
                flex:1;padding:9px;border-radius:8px;
                border:1px solid rgba(255,255,255,0.15);background:transparent;
                color:#94a3b8;cursor:pointer;font-size:.85rem;font-family:'Inter',sans-serif;
                transition:background .2s;
            ">${esc(t.popupCancel)}</button>
            <button id="popup-link" style="
                flex:1;padding:9px;border-radius:8px;border:none;
                background:linear-gradient(135deg,#3b82f6,#6366f1);
                color:#fff;cursor:pointer;font-weight:600;font-size:.85rem;
                font-family:'Inter',sans-serif;transition:opacity .2s;
            ">${esc(t.popupLink)}</button>
        </div>`;

    document.body.appendChild(popup);

    // Position near anchor
    const rect = anchorEl.getBoundingClientRect();
    const POPUP_W = 400, POPUP_H = 360;
    popup.style.left = Math.max(8, Math.min(rect.left, window.innerWidth  - POPUP_W - 8)) + "px";
    popup.style.top  = Math.max(8, Math.min(rect.bottom + 10, window.innerHeight - POPUP_H - 8)) + "px";

    document.getElementById("popup-cancel").addEventListener("click", (e) => {
        e.stopPropagation();
        clearSelection();
    });
    document.getElementById("popup-link").addEventListener("click", (e) => {
        e.stopPropagation();
        const relation = document.getElementById("popup-rel-select").value;
        const checkedRadio = document.querySelector('input[name="popup-role"]:checked');

        if (!checkedRadio) {
            // Seçim yapılmamışsa sessizce bekle, çökmesini engelle
            return;
        }

        const role = checkedRadio.value;
        linkNodes(sourceId, targetId, relation, role);
    });

}

function hideRelationPopup() {
    const p = document.getElementById("rst-relation-popup");
    if (p) p.remove();
}

// ---------------------------------------------------------------------------
// §11. Arrow Drawing & Connection Management
// ---------------------------------------------------------------------------
function linkNodes(sourceId, targetId, relation, role) {
    const srcEl = document.getElementById(`node-${sourceId}`);
    const tgtEl = document.getElementById(`node-${targetId}`);
    if (!srcEl || !tgtEl) return;

    // Determine nucleus and satellite based on role
    let nucleusId, satelliteId;
    if (role === "sat-nuc") {
        satelliteId = sourceId;
        nucleusId = targetId;
    } else if (role === "nuc-sat") {
        nucleusId = sourceId;
        satelliteId = targetId;
    } else if (role === "joint") {
        // Joint: both are equal partners
        nucleusId = null;
        satelliteId = null;
    } else {
        // Multi-nuclear: both are nuclei, no satellite
        nucleusId = null;
        satelliteId = null;
    }

    // Build label text
    const relObj = RST_RELATIONS.find(r => r.value === relation);
    const relLabel = relObj ? (currentLang === "TR" ? relObj.tr : relObj.en) : relation;

    // Create LeaderLine connecting NUMBER BADGES (left-side routing)
    try {
        if (typeof LeaderLine === "undefined") throw new Error("LeaderLine not loaded");

        // Anchor arrows to the number badges, not the text spans
        const numSource = document.getElementById(`num-${sourceId}`);
        const numTarget = document.getElementById(`num-${targetId}`);
        if (!numSource || !numTarget) throw new Error("Number badge not found");

        // Highlight engaged badges
        numSource.classList.add("arrow-anchor");
        numTarget.classList.add("arrow-anchor");

        const line = new LeaderLine(numSource, numTarget, {
            color: '#3b82f6',
            size: 2.5,
            path: 'fluid',
            startSocket: 'left',
            endSocket: 'left',
            startSocketGravity: [-50, 0],
            endSocketGravity: [-50, 0],
            dropShadow: true,
        });

        // Relation label pill
        line.setOptions({
            middleLabel: LeaderLine.pathLabel({
                text: relLabel,
                color: '#1e293b',
                fill: true,
                outlineColor: '#ffffff',
                fontSize: '11px',
                padding: [4, 8],
            }),
        });
        appState.leaderLines.push(line);
    } catch (_) {
        appState.leaderLines.push(null); // CRITICAL: Prevent array desync
    }

    // Record connection
    const src = appState.sentences.find(s => s.id === sourceId);
    const tgt = appState.sentences.find(s => s.id === targetId);

    appState.connections.push({
        sourceId,
        targetId,
        sourceText: src ? src.text : "",
        targetText: tgt ? tgt.text : "",
        relation,
        role,
        nucleusId,
        satelliteId,
    });

    clearSelection();
    renderConnectionsList();
    updateNodeBadges();
    updateStatistics();

    // Status badge
    const status = document.getElementById("workspaceStatus");
    if (status) {
        status.textContent = `${appState.connections.length} ↗`;
        status.style.color = "#22c55e";
    }

    saveAppStateToLocalStorage();
}

/** XLSX export via SheetJS — dual-sheet: RST_Analysis + Coreference_Analysis */
function exportXLSX() {
    const t = TRANSLATIONS[currentLang];
    const hasRST = appState.connections && appState.connections.length > 0;
    const hasCoref = appState.coref_connections && appState.coref_connections.length > 0;

    if (!hasRST && !hasCoref) { 
        alert(t.exportNoData || "Dışa aktarılacak veri yok."); 
        return; 
    }
    if (typeof XLSX === "undefined") { 
        alert(t.errorLibMissing || "Gerekli kütüphane yüklenemedi."); 
        return; 
    }

    const wb = XLSX.utils.book_new();

    // ── Sheet 1: RST_Analysis ───────────────────────────────────────────
    if (hasRST) {
        const rstData = appState.connections.map(c => {
            const actualRelation = c.relation || c.type || "unknown";
            const relObj = typeof RST_RELATIONS !== 'undefined' ? RST_RELATIONS.find(r => r.value === actualRelation) : null;
            const relTR = relObj ? relObj.tr : actualRelation;
            const relEN = relObj ? relObj.en : actualRelation;

            let roleLabel = "-";
            if (c.role) {
                if (c.role === "sat-nuc") roleLabel = `[${c.sourceId}](U) → [${c.targetId}](Ç)`;
                else if (c.role === "nuc-sat") roleLabel = `[${c.sourceId}](Ç) ← [${c.targetId}](U)`;
                else if (c.role === "joint") roleLabel = `[${c.sourceId}] - [${c.targetId}] (Joint)`;
                else roleLabel = `[${c.sourceId}] ↔ [${c.targetId}] (Multi)`;
            }

            return {
                "Kaynak [ID]": c.sourceId || "-",
                "Kaynak Metin": c.sourceText || "",
                "Hedef [ID]": c.targetId || "-",
                "Hedef Metin": c.targetText || "",
                "İlişki (TR)": relTR,
                "Relation (EN)": relEN,
                "Yön/Rol": roleLabel
            };
        });
        const wsRST = XLSX.utils.json_to_sheet(rstData);
        XLSX.utils.book_append_sheet(wb, wsRST, "RST_Analysis");
    }

    // ── Sheet 2: Coreference_Analysis (Kurşun Geçirmez Kayıt) ─────────────
    if (hasCoref) {
        const corefData = appState.coref_connections.map(c => {
            const typeObj = COREF_TYPES.find(ct => ct.value === c.type);
            const typeTR = typeObj ? typeObj.tr : c.type;
            const typeEN = typeObj ? typeObj.en : c.type;

            return {
                "Bağlantı ID": c.id || "-",
                "Kaynak Kelime": c.sourceText || "",
                "Kaynak Kelime ID": c.sourceWordId || "",
                "Hedef Kelime": c.targetText || "",
                "Hedef Kelime ID": c.targetWordId || "",
                "Gönderim Türü (TR)": typeTR,
                "Coreference Type (EN)": typeEN
            };
        });
        const wsCoref = XLSX.utils.json_to_sheet(corefData);
        XLSX.utils.book_append_sheet(wb, wsCoref, "Coreference_Analysis");
    } else if (appState.currentMode === "coref" && !hasCoref) {
        // Fallback safety alert to ensure UI feedback
        console.warn("Coreference arrays are empty during export schema matching.");
    }

    // Generate output file safely
    try {
        XLSX.writeFile(wb, "turkref_export.xlsx");
    } catch (err) {
        console.error("XLSX Engine failed to write file:", err);
    }
}

function removeConnection(idx) {
    if (idx < 0 || idx >= appState.connections.length) return;

    if (idx < appState.leaderLines.length) {
        try {
            if (appState.leaderLines[idx] && typeof appState.leaderLines[idx].remove === 'function') {
                appState.leaderLines[idx].remove();
            }
        } catch (_) { }
        appState.leaderLines.splice(idx, 1);
    }
    appState.connections.splice(idx, 1);
    saveAppStateToLocalStorage();
    renderConnectionsList();
    updateNodeBadges();
    updateStatistics();

    // 🛡️ Re-sync Guard: Hata olursa hayalet okları temizle
    if (appState.leaderLines.length !== appState.connections.length) {
        document.querySelectorAll('svg.leader-line, .leader-line').forEach(el => el.remove());
        appState.leaderLines.length = 0;
    }

    const t = TRANSLATIONS[currentLang];
    const status = document.getElementById("workspaceStatus");
    if (status) {
        status.textContent = appState.connections.length > 0
            ? `${appState.connections.length} ↗`
            : t.statusReady;
        status.style.color = appState.connections.length > 0 ? "#22c55e" : "";
    }
}

function repositionArrows() {
    // Reposition only the currently visible mode's arrows
    const lines = appState.currentMode === "coref"
        ? appState.coref_leaderLines
        : appState.leaderLines;
    if (lines.length === 0) return;
    lines.forEach(line => {
        if (!line) return;
        try { line.position(); } catch (_) { }
    });
}

// ---------------------------------------------------------------------------
// §12. Mode Switching — RST ↔ Coreference
// ---------------------------------------------------------------------------

/**
 * Switch between RST Analysis and Coreference (Gönderim) mode.
 * Hides the inactive mode's arrows, shows the active mode's arrows,
 * re-renders the workspace (EDUs vs word spans), and updates Panel 3.
 */
function switchMode(mode) {
    if (mode === appState.currentMode) return;

    const dispWrapper = document.getElementById("dispersion-wrapper");

    // Handle early return safely without skipping UI components
    if (appState.sentences.length === 0 && mode !== appState.currentMode) {
        appState.currentMode = mode;
        updateModeUI(mode);
        if (dispWrapper) {
            dispWrapper.style.display = mode === 'coref' ? 'block' : 'none';
        }
        return;
    }

    appState.currentMode = mode;
    updateModeUI(mode);

    const t = TRANSLATIONS[currentLang];

    if (mode === "coref") {
        // Hide RST elements
        appState.leaderLines.forEach(line => {
            if (!line) return;
            try { line.hide('none'); } catch (_) { }
        });
        clearSelection();
        hideRelationPopup();

        // Render workspace if sentences exist
        if (appState.sentences.length > 0) {
            renderCorefWorkspace(appState.sentences);
        }

        // Show Coref elements
        appState.coref_leaderLines.forEach(line => {
            if (!line) return;
            try { line.show('none'); } catch (_) { }
        });

        renderCorefConnectionsList();

        if (dispWrapper) dispWrapper.style.display = 'block';

        const hint = document.getElementById("canvasInstruction");
        if (hint) {
            hint.textContent = t.corefCanvasHint;
            hint.style.display = appState.sentences.length > 0 ? "block" : "none";
        }

    } else {
        // Hide Coref elements
        appState.coref_leaderLines.forEach(line => {
            if (!line) return;
            try { line.hide('none'); } catch (_) { }
        });
        clearCorefSelection();
        hideCorefPopup();

        if (dispWrapper) dispWrapper.style.display = 'none';

        if (appState.sentences.length > 0) {
            renderWorkspace(appState.sentences);
        }

        appState.leaderLines.forEach(line => {
            if (!line) return;
            try { line.show('none'); } catch (_) { }
        });

        renderConnectionsList();
        updateNodeBadges();

        const hint = document.getElementById("canvasInstruction");
        if (hint) {
            hint.textContent = t.canvasHint;
            hint.style.display = appState.sentences.length > 0 ? "block" : "none";
        }
    }

    setTimeout(repositionArrows, 50);

    const status = document.getElementById("workspaceStatus");
    if (status) {
        const count = mode === "coref" ? appState.coref_connections.length : appState.connections.length;
        status.textContent = count > 0 ? `${count} ↗` : t.statusReady;
        status.style.color = count > 0 ? "#22c55e" : "";
    }

    updateStatistics();
}

/** Update mode toggle button states and panel titles */
function updateModeUI(mode) {
    const t = TRANSLATIONS[currentLang];
    const rstBtn = document.getElementById("mode-rst");
    const corefBtn = document.getElementById("mode-coref");
    if (rstBtn) rstBtn.classList.toggle("active", mode === "rst");
    if (corefBtn) corefBtn.classList.toggle("active", mode === "coref");

    // Update Panel 2 title
    const titleEl = document.getElementById("panel2TitleText");
    const iconEl = document.getElementById("panel2Icon");
    if (titleEl) {
        titleEl.textContent = mode === "coref" ? t.corefPanel2Title : t.panel2Title;
    }
    if (iconEl) {
        iconEl.className = mode === "coref" ? "fas fa-link" : "fas fa-project-diagram";
    }

    // Update Panel 3 connections header
    const connHeader = document.querySelector("[data-i18n='wordAnalysisTitle']");
    if (connHeader) {
        connHeader.textContent = mode === "coref" ? t.corefWordAnalysisTitle : t.wordAnalysisTitle;
    }
}

// ---------------------------------------------------------------------------
// §13. Coreference DOM Parser — XSS-Safe Word Wrapping
// ---------------------------------------------------------------------------

/**
 * Render the workspace with individually clickable word spans.
 * SECURITY: Uses document.createElement + textContent exclusively.
 *           No innerHTML. No esc() needed (textContent is inherently safe).
 */
function renderCorefWorkspace(sentences) {
    const workspace = document.getElementById("manual-workspace");
    workspace.innerHTML = "";
    workspace.style.lineHeight = "normal";
    workspace.style.textAlign = "left";

    let globalWordIndex = 0;

    sentences.forEach((s) => {
        // Row container
        const row = document.createElement("div");
        row.className = "sentence-row coref-sentence";

        // Number badge
        const numBadge = document.createElement("div");
        numBadge.className = "rst-num";
        numBadge.id = `num-${s.id}`;
        numBadge.textContent = `[${s.id}]`;

        // Words container
        const wordsContainer = document.createElement("div");
        wordsContainer.className = "coref-words-container";

        // Split text into words (non-whitespace sequences)
        const words = s.text.match(/\S+/g) || [];

        words.forEach((word, wordIdx) => {
            globalWordIndex++;
            const wordSpan = document.createElement("span");
            wordSpan.className = "coref-word";
            wordSpan.id = `word-${s.id}-${wordIdx}`;
            wordSpan.setAttribute("data-sentence", String(s.id));
            wordSpan.setAttribute("data-word-index", String(wordIdx));
            wordSpan.setAttribute("data-global-index", String(globalWordIndex));
            wordSpan.textContent = word;  // XSS-safe: textContent, not innerHTML

            // Mark words that are part of existing connections
            const wordId = wordSpan.id;
            const isLinked = appState.coref_connections.some(
                c => c.sourceWordId === wordId || c.targetWordId === wordId
            );
            if (isLinked) wordSpan.classList.add("linked");

            wordSpan.addEventListener("click", (e) => {
                e.stopPropagation();
                onCorefWordClick(wordSpan.id, word);
            });

            wordsContainer.appendChild(wordSpan);
        });

        row.appendChild(numBadge);
        row.appendChild(wordsContainer);
        workspace.appendChild(row);
    });
}

// ---------------------------------------------------------------------------
// §14. Coreference Word Selection & Popup
// ---------------------------------------------------------------------------

/** Handle clicking a word in Coreference mode */
function onCorefWordClick(wordId, wordText) {
    drawDispersionPlot(wordText);

    const clickedEl = document.getElementById(wordId);
    if (!clickedEl) return;

    // Toggle off if already selected
    const existingIdx = appState.coref_selectedWords.findIndex(w => w.wordId === wordId);
    if (existingIdx !== -1) {
        appState.coref_selectedWords.splice(existingIdx, 1);
        clickedEl.classList.remove("selected-source", "selected-target");
        return;
    }

    // If already two selected, clear and start fresh
    if (appState.coref_selectedWords.length >= 2) {
        clearCorefSelection();
    }

    // Select the word
    appState.coref_selectedWords.push({ wordId, wordText });

    if (appState.coref_selectedWords.length === 1) {
        clickedEl.classList.add("selected-source");
    } else {
        clickedEl.classList.add("selected-target");
        // Two words selected → show coref popup
        showCorefPopup(
            appState.coref_selectedWords[0].wordId,
            appState.coref_selectedWords[1].wordId,
            clickedEl
        );
    }
}

// ---------------------------------------------------------------------------
// §14b. Lexical Dispersion Plot — Pure HTML5 Canvas
// ---------------------------------------------------------------------------

/**
 * Draws a lexical dispersion plot on the canvas.
 * Shows where targetWordText appears across the entire parsed text.
 * Uses low-opacity fills so repeated words in the same region naturally
 * compound into a darker heatmap effect.
 */
function drawDispersionPlot(wordText) {
    if (typeof wordText !== 'string') return;
    const wrapper = document.getElementById('dispersion-wrapper');
    const canvas = document.getElementById('dispersionCanvas');
    const wordDisplay = document.getElementById('target-word-display');
    if (!canvas || !wrapper) return;

    // Force display block to ensure offsetWidth calculations do not drop to 0
    wrapper.style.display = 'block';
    wordDisplay.textContent = wordText;

    // Sync physical canvas pixels with the new container width inside the sidebar
    canvas.width = canvas.parentElement.offsetWidth || 270;
    canvas.height = canvas.parentElement.offsetHeight || 45;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const allWords = Array.from(document.querySelectorAll('.coref-word'));
    if (allWords.length === 0) return;

    ctx.fillStyle = 'rgba(124, 58, 237, 0.55)'; // Pure purple thematic color with clean compounding opacity
    allWords.forEach((el, index) => {
        if (el.textContent.trim().toLowerCase() === wordText.trim().toLowerCase()) {
            const xPos = (index / allWords.length) * canvas.width;
            ctx.fillRect(xPos, 0, 2.5, canvas.height);
        }
    });
}

/** Clear all coref word selections */
function clearCorefSelection() {
    appState.coref_selectedWords.forEach(w => {
        const el = document.getElementById(w.wordId);
        if (el) el.classList.remove("selected-source", "selected-target");
    });
    appState.coref_selectedWords = [];
    hideCorefPopup();
}

/** Show the Coreference Type selection popup (dark glassmorphism) */
function showCorefPopup(sourceWordId, targetWordId, anchorEl) {
    hideCorefPopup();
    const t = TRANSLATIONS[currentLang];

    const srcEl = document.getElementById(sourceWordId);
    const tgtEl = document.getElementById(targetWordId);
    const srcText = srcEl ? srcEl.textContent : "";
    const tgtText = tgtEl ? tgtEl.textContent : "";

    const popup = document.createElement("div");
    popup.id = "coref-relation-popup";
    popup.style.cssText = `
        position: fixed; z-index: 10000;
        background: rgba(15,23,42,0.96);
        backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(155,89,182,0.3);
        border-radius: 14px; padding: 18px 20px;
        min-width: 300px; max-width: 380px;
        box-shadow: 0 24px 48px rgba(0,0,0,0.45);
        color: #f1f5f9; font-family: 'Inter', sans-serif;
    `;

    // Build type options
    const opts = COREF_TYPES.map(ct => {
        const label = currentLang === "TR" ? ct.tr : ct.en;
        return `<option value="${esc(ct.value)}">${esc(label)}</option>`;
    }).join("");

    const selectStyle = `
        width:100%;padding:8px 10px;border-radius:8px;
        border:1px solid rgba(155,89,182,0.3);
        background:#f8fafc;color:#1e293b;
        font-size:.9rem;margin-bottom:14px;font-family:'Inter',sans-serif;outline:none;
    `;

    popup.innerHTML = `
        <div style="font-weight:600;margin-bottom:12px;font-size:.95rem;">${esc(t.corefPopupTitle)}</div>
        <div style="font-size:.8rem;color:#c084fc;margin-bottom:10px;">
            "${esc(srcText)}" → "${esc(tgtText)}"
        </div>

        <select id="coref-type-select" style="${selectStyle}">${opts}</select>

        <div style="display:flex;gap:8px;">
            <button id="coref-popup-cancel" style="
                flex:1;padding:9px;border-radius:8px;
                border:1px solid rgba(155,89,182,0.3);background:transparent;
                color:#94a3b8;cursor:pointer;font-size:.85rem;font-family:'Inter',sans-serif;
                transition:background .2s;
            ">${esc(t.corefPopupCancel)}</button>
            <button id="coref-popup-link" style="
                flex:1;padding:9px;border-radius:8px;border:none;
                background:linear-gradient(135deg,#9b59b6,#8e44ad);
                color:#fff;cursor:pointer;font-weight:600;font-size:.85rem;
                font-family:'Inter',sans-serif;transition:opacity .2s;
            ">${esc(t.corefPopupLink)}</button>
        </div>`;

    document.body.appendChild(popup);

    // Position near anchor
    const rect = anchorEl.getBoundingClientRect();
    const POPUP_W = 400, POPUP_H = 220;
    popup.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - POPUP_W - 8)) + "px";
    popup.style.top = Math.max(8, Math.min(rect.bottom + 10, window.innerHeight - POPUP_H - 8)) + "px";

    document.getElementById("coref-popup-cancel").addEventListener("click", (e) => {
        e.stopPropagation();
        clearCorefSelection();
    });
    document.getElementById("coref-popup-link").addEventListener("click", (e) => {
        e.stopPropagation();
        const corefType = document.getElementById("coref-type-select").value;
        linkCorefWords(sourceWordId, targetWordId, corefType);
    });
}

/** Remove the coref popup from the DOM */
function hideCorefPopup() {
    const p = document.getElementById("coref-relation-popup");
    if (p) p.remove();
}

// ---------------------------------------------------------------------------
// §15. Coreference LeaderLine Drawing & Connection Management
// ---------------------------------------------------------------------------

/** Draw a color-coded dashed animated line between two word spans */
function linkCorefWords(sourceWordId, targetWordId, corefType) {
    const srcEl = document.getElementById(sourceWordId);
    const tgtEl = document.getElementById(targetWordId);
    if (!srcEl || !tgtEl) return;

    // Build label & extract semantic color
    const typeObj = COREF_TYPES.find(ct => ct.value === corefType);
    const typeLabel = typeObj ? (currentLang === "TR" ? typeObj.tr : typeObj.en) : corefType;
    const lineColor = typeObj ? typeObj.color : '#9b59b6';

    // Create animated dashed LeaderLine with per-type color
    try {
        if (typeof LeaderLine === "undefined") throw new Error("LeaderLine not loaded");

        const line = new LeaderLine(srcEl, tgtEl, {
            color: lineColor,
            size: 2,
            path: 'fluid',
            startSocket: 'bottom',
            endSocket: 'bottom',
            startSocketGravity: [0, 40],
            endSocketGravity: [0, 40],
            dash: { animation: true },
            dropShadow: { dx: 0, dy: 1, blur: 2 },
        });

        // Relation label pill — use the semantic color as outline
        line.setOptions({
            middleLabel: LeaderLine.pathLabel({
                text: typeLabel,
                color: '#ffffff',
                outlineColor: lineColor,
                fontSize: '10px',
                padding: [3, 7],
            }),
        });

        appState.coref_leaderLines.push(line);
    } catch (_) {
        appState.coref_leaderLines.push(null); // Prevent array desync
    }

    // Record connection
    const connId = appState.coref_nextId++;
    appState.coref_connections.push({
        id: connId,
        sourceWordId,
        targetWordId,
        type: corefType,
        sourceText: srcEl.textContent,
        targetText: tgtEl.textContent,
    });

    // Mark words as linked
    srcEl.classList.add("linked");
    tgtEl.classList.add("linked");

    clearCorefSelection();
    renderCorefConnectionsList();
    updateStatistics();

    // Status badge
    const status = document.getElementById("workspaceStatus");
    if (status) {
        status.textContent = `${appState.coref_connections.length} ↗`;
        status.style.color = "#22c55e";
    }

    saveAppStateToLocalStorage();
}

/** Panel 3 — coreference connections list */
function renderCorefConnectionsList() {
    const container = document.getElementById("word-analysis-content");
    const t = TRANSLATIONS[currentLang];
    container.innerHTML = "";

    if (appState.coref_connections.length === 0) {
        container.innerHTML = `<span class="text-muted">${esc(t.corefWordAnalysisEmpty)}</span>`;
        return;
    }

    appState.coref_connections.forEach((conn, idx) => {
        const div = document.createElement("div");
        div.className = "token-card";

        const typeObj = COREF_TYPES.find(ct => ct.value === conn.type);
        const typeDisplay = typeObj ? (currentLang === "TR" ? typeObj.tr : typeObj.en) : conn.type;
        const badgeColor = typeObj ? typeObj.color : '#9b59b6';

        div.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong>"${esc(conn.sourceText)}" → "${esc(conn.targetText)}"</strong>
                <span class="coref-badge" style="background:${badgeColor}15;color:${badgeColor};border-color:${badgeColor}40;">${esc(typeDisplay)}</span>
            </div>
            <div style="font-size:.8rem;color:#94a3b8;margin-top:4px;">
                ID: ${conn.id} · ${esc(conn.sourceWordId)} → ${esc(conn.targetWordId)}
            </div>`;

        const removeBtn = document.createElement("button");
        removeBtn.style.cssText = "margin-top:6px;color:#ef4444;cursor:pointer;background:none;border:none;font-size:.8rem;font-family:'Inter',sans-serif;";
        removeBtn.innerHTML = `<i class="fas fa-trash"></i> ${esc(t.removeLabel)}`;
        removeBtn.addEventListener("click", () => removeCorefConnection(idx));
        div.appendChild(removeBtn);

        container.appendChild(div);
    });
}

/** Remove a coreference connection by index */
function removeCorefConnection(idx) {
    if (idx < 0 || idx >= appState.coref_connections.length) return;

    // Capture source/target word IDs BEFORE splicing
    const removedConn = appState.coref_connections[idx];
    const srcWordId = removedConn.sourceWordId;
    const tgtWordId = removedConn.targetWordId;

    // Remove LeaderLine
    if (idx < appState.coref_leaderLines.length) {
        try {
            if (appState.coref_leaderLines[idx] && typeof appState.coref_leaderLines[idx].remove === 'function') {
                appState.coref_leaderLines[idx].remove();
            }
        } catch (_) { }
        appState.coref_leaderLines.splice(idx, 1);
    }

    // Remove connection from data
    appState.coref_connections.splice(idx, 1);
    saveAppStateToLocalStorage();

    // ── FIX: Clean ghost highlight classes ───────────────────────────────
    // Remove selection classes unconditionally
    [srcWordId, tgtWordId].forEach(wId => {
        const el = document.getElementById(wId);
        if (!el) return;
        el.classList.remove("selected-source", "selected-target");

        // Only remove .linked if this word is NOT part of any remaining connection
        const stillLinked = appState.coref_connections.some(
            c => c.sourceWordId === wId || c.targetWordId === wId
        );
        if (!stillLinked) {
            el.classList.remove("linked");
        }
    });

    renderCorefConnectionsList();
    updateStatistics();

    // Re-sync guard
    if (appState.coref_leaderLines.length !== appState.coref_connections.length) {
        appState.coref_leaderLines.forEach(l => { try { if (l) l.remove(); } catch (_) {} });
        appState.coref_leaderLines.length = 0;
    }

    const t = TRANSLATIONS[currentLang];
    const status = document.getElementById("workspaceStatus");
    if (status) {
        status.textContent = appState.coref_connections.length > 0
            ? `${appState.coref_connections.length} ↗`
            : t.statusReady;
        status.style.color = appState.coref_connections.length > 0 ? "#22c55e" : "";
    }
}


/** PDF via browser print dialog — arrows hidden by CSS @media print */
function exportPDF() {
    const t = TRANSLATIONS[currentLang];
    const dateEl = document.querySelector(".print-date");
    if (dateEl) dateEl.innerText = new Date().toLocaleString(currentLang === "TR" ? "tr-TR" : "en-GB");

    const origEl = document.getElementById("print-original-text");
    if (origEl) origEl.innerText = document.getElementById("inputText").value || "—";

    const edusEl = document.getElementById("print-edus");
    if (edusEl) {
        edusEl.innerHTML = appState.sentences.length > 0
            ? appState.sentences.map(s => `<p><strong>[${s.id}]</strong> ${esc(s.text)}</p>`).join("")
            : `<p>${esc(t.errorNoSentences)}</p>`;
    }

    const annotEl = document.getElementById("print-annotations");
    if (annotEl) {
        if (appState.connections.length > 0) {
            // Build a proper table for print
            let table = `<table style="width:100%;border-collapse:collapse;font-size:11px;margin-top:8px;">
                <thead>
                    <tr style="background:#f1f5f9;text-align:left;">
                        <th style="padding:6px;border:1px solid #cbd5e1;">Kaynak</th>
                        <th style="padding:6px;border:1px solid #cbd5e1;">Hedef</th>
                        <th style="padding:6px;border:1px solid #cbd5e1;">İlişki</th>
                        <th style="padding:6px;border:1px solid #cbd5e1;">Yön</th>
                    </tr>
                </thead><tbody>`;

            appState.connections.forEach(c => {
                const relObj = RST_RELATIONS.find(r => r.value === c.relation);
                const relDisplay = relObj ? (currentLang === "TR" ? relObj.tr : relObj.en) : c.relation;

                let roleDisplay;
                if (c.role === "sat-nuc") roleDisplay = "(U)→(Ç)";
                else if (c.role === "nuc-sat") roleDisplay = "(Ç)←(U)";
                else if (c.role === "joint") roleDisplay = "Joint";
                else roleDisplay = "Multi";

                table += `<tr>
                    <td style="padding:5px;border:1px solid #e2e8f0;">[${esc(String(c.sourceId))}] ${esc(c.sourceText.substring(0, 40))}…</td>
                    <td style="padding:5px;border:1px solid #e2e8f0;">[${esc(String(c.targetId))}] ${esc(c.targetText.substring(0, 40))}…</td>
                    <td style="padding:5px;border:1px solid #e2e8f0;">${esc(relDisplay)}</td>
                    <td style="padding:5px;border:1px solid #e2e8f0;">${esc(roleDisplay)}</td>
                </tr>`;
            });

            table += `</tbody></table>`;
            annotEl.innerHTML = table;
        } else {
            annotEl.innerHTML = `<p>${esc(t.errorNoConnections)}</p>`;
        }
    }

    // GÖREV 3: İstatistikleri PDF'e ekle
    if (annotEl && appState.connections.length > 0) {
        const statsDiv = document.createElement("div");
        statsDiv.innerHTML = `<h3 style="margin-top:20px; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">${esc(t.statsTitle)}</h3>`;
        const pdfCounts = Object.create(null);
        appState.connections.forEach(conn => {
            const rObj = RST_RELATIONS.find(r => r.value === conn.relation);
            const rLabel = rObj ? (currentLang === "TR" ? rObj.tr : rObj.en) : conn.relation;
            pdfCounts[rLabel] = (pdfCounts[rLabel] || 0) + 1;
        });
        let statHtml = `<ul style="list-style-type:none; padding-left:0; font-size:12px;">`;
        const pdfTotal = appState.connections.length;
        for (const [rel, count] of Object.entries(pdfCounts).sort((a, b) => b[1] - a[1])) {
            const perc = ((count / pdfTotal) * 100).toFixed(1);
            statHtml += `<li style="margin-bottom:4px;"><strong>${esc(rel)}:</strong> ${count} (%${perc})</li>`;
        }
        statHtml += `<li style="margin-top:6px; border-top:1px solid #ccc; width:150px; padding-top:4px;"><strong>${esc(t.statsTotal)}:</strong> ${pdfTotal}</li></ul>`;
        statsDiv.insertAdjacentHTML('beforeend', statHtml);
        annotEl.appendChild(statsDiv);
    }

    // ── Coreference data for PDF ────────────────────────────────────────
    if (annotEl && appState.coref_connections.length > 0) {
        const corefDiv = document.createElement("div");
        corefDiv.innerHTML = `<h3 style="margin-top:24px; border-bottom:1px solid #d8b4fe; padding-bottom:8px; color:#7c3aed;">${esc(t.corefWordAnalysisTitle)}</h3>`;

        let corefTable = `<table style="width:100%;border-collapse:collapse;font-size:11px;margin-top:8px;">
            <thead>
                <tr style="background:#f3e8ff;text-align:left;">
                    <th style="padding:6px;border:1px solid #d8b4fe;">ID</th>
                    <th style="padding:6px;border:1px solid #d8b4fe;">${esc(currentLang === "TR" ? "Kaynak Kelime" : "Source Word")}</th>
                    <th style="padding:6px;border:1px solid #d8b4fe;">${esc(currentLang === "TR" ? "Hedef Kelime" : "Target Word")}</th>
                    <th style="padding:6px;border:1px solid #d8b4fe;">${esc(currentLang === "TR" ? "Tür" : "Type")}</th>
                </tr>
            </thead><tbody>`;

        appState.coref_connections.forEach(c => {
            const typeObj = COREF_TYPES.find(ct => ct.value === c.type);
            const typeDisplay = typeObj ? (currentLang === "TR" ? typeObj.tr : typeObj.en) : c.type;

            corefTable += `<tr>
                <td style="padding:5px;border:1px solid #e2e8f0;">${c.id}</td>
                <td style="padding:5px;border:1px solid #e2e8f0;">${esc(c.sourceText)}</td>
                <td style="padding:5px;border:1px solid #e2e8f0;">${esc(c.targetText)}</td>
                <td style="padding:5px;border:1px solid #e2e8f0;">${esc(typeDisplay)}</td>
            </tr>`;
        });

        corefTable += `</tbody></table>`;
        corefDiv.insertAdjacentHTML('beforeend', corefTable);
        annotEl.appendChild(corefDiv);
    }

    window.print();
}

// ---------------------------------------------------------------------------
// §13. Utilities
// ---------------------------------------------------------------------------

/** HTML entity escaper (XSS prevention) */
function esc(str) {
    if (str == null) return ""; 
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
    return String(str).replace(/[&<>'"]/g, c => map[c] || c);
}

/** DOMParser sanitizer — defense-in-depth for trusted HTML injection (mXSS prevention) */
function safeHTML(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    doc.querySelectorAll('script,iframe,object,embed,form').forEach(el => el.remove());
    return doc.body.innerHTML;
}

function showError(msg) {
    document.getElementById("segmentList").innerHTML =
        `<div class="error-state"><i class="fas fa-exclamation-triangle"></i> ${esc(String(msg))}</div>`;
}

/** Clears input, workspace, and all state */
function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("sampleDropdown").value = "";

    // ── FIX: Sweep ghost highlights before fullReset clears the DOM ─────
    document.querySelectorAll('.coref-word').forEach(el => {
        el.classList.remove('linked', 'selected-source', 'selected-target');
    });

    fullReset();
    localStorage.removeItem("turkref_autosave_data");

    const t = TRANSLATIONS[currentLang];
    document.getElementById("segmentList").innerHTML =
        `<div class="empty-state">${esc(t.emptyState)}</div>`;
    document.getElementById("word-analysis-content").innerHTML =
        `<p class="text-muted">${esc(t.wordAnalysisEmpty)}</p>`;
    document.getElementById("node-details").innerHTML =
        `<p class="text-muted">${esc(t.nodeDetailEmpty)}</p>`;
    const status = document.getElementById("workspaceStatus");
    if (status) { status.textContent = t.statusReady; status.style.color = ""; }

    // State-aware dispersion plot visibility
    const dispC = document.getElementById('dispersion-wrapper');
    if (dispC) {
        dispC.style.display = appState.currentMode === 'coref' ? 'block' : 'none';
    }

    updateStatistics();
}

/** Nuke everything: sentences, arrows, connections (BOTH modes) */
function fullReset() {
    try { confirmActionCallback = null; } catch(_) {}
    try { hideCustomConfirm(); } catch(_) {}

    // ── Destroy RST LeaderLines ─────────────────────────────────────────
    for (let i = appState.leaderLines.length - 1; i >= 0; i--) {
        try {
            if (appState.leaderLines[i] && typeof appState.leaderLines[i].remove === 'function') {
                appState.leaderLines[i].remove();
            }
        } catch (_) { }
        appState.leaderLines[i] = null; 
    }
    appState.leaderLines.length = 0; 

    // ── Destroy Coreference LeaderLines ──────────────────────────────────
    for (let i = appState.coref_leaderLines.length - 1; i >= 0; i--) {
        try {
            if (appState.coref_leaderLines[i] && typeof appState.coref_leaderLines[i].remove === 'function') {
                appState.coref_leaderLines[i].remove();
            }
        } catch (_) { }
        appState.coref_leaderLines[i] = null;
    }
    appState.coref_leaderLines.length = 0;

    // Sweep orphaned SVG masks
    document.querySelectorAll('svg.leader-line, .leader-line').forEach(el => el.remove());

    if (typeof LeaderLine !== 'undefined' && LeaderLine._instances) {
        LeaderLine._instances = [];
    }

    appState.connections = [];
    appState.selectedNodes = [];
    appState.coref_connections = [];
    appState.coref_selectedWords = [];
    appState.coref_nextId = 1;
    appState.sentences = [];
    hideRelationPopup();
    hideCorefPopup();

    // ── FIX: Sweep all coref-word ghost highlights before clearing DOM ──
    document.querySelectorAll('.coref-word').forEach(el => {
        el.classList.remove('linked', 'selected-source', 'selected-target');
    });

    // Hide dispersion plot
    // State-aware dispersion plot visibility
    const dispC = document.getElementById('dispersion-wrapper');
    if (dispC) {
        dispC.style.display = appState.currentMode === 'coref' ? 'block' : 'none';
    }

    const ws = document.getElementById("manual-workspace");
    if (ws) ws.innerHTML = "";

    localStorage.removeItem("turkref_autosave_data");
}

/** Soft reset: keep sentences, remove only arrows & connections for ACTIVE mode */
function resetConnections() {
    if (appState.currentMode === "coref") {
        // ── Coref Reset ─────────────────────────────────────────────────
        for (let i = appState.coref_leaderLines.length - 1; i >= 0; i--) {
            try {
                if (appState.coref_leaderLines[i] && typeof appState.coref_leaderLines[i].remove === 'function') {
                    appState.coref_leaderLines[i].remove();
                }
            } catch (_) { }
            appState.coref_leaderLines[i] = null;
        }
        appState.coref_leaderLines.length = 0;
        appState.coref_connections = [];
        appState.coref_selectedWords = [];
        
        if (typeof LeaderLine !== 'undefined' && LeaderLine._instances) {
            LeaderLine._instances = [];
        }
        appState.coref_nextId = 1;
        clearCorefSelection();

        if (appState.sentences.length > 0) {
            renderCorefWorkspace(appState.sentences);
        }

        const t = TRANSLATIONS[currentLang];
        const c = document.getElementById("word-analysis-content");
        if (c) c.innerHTML = `<span class="text-muted">${esc(t.corefWordAnalysisEmpty)}</span>`;
        const status = document.getElementById("workspaceStatus");
        if (status) { status.textContent = t.statusReady; status.style.color = ""; }
        updateStatistics();
        saveAppStateToLocalStorage();
    } else {
        // ── RST Reset ───────────────────────────────────────────────────
        for (let i = appState.leaderLines.length - 1; i >= 0; i--) {
            try {
                if (appState.leaderLines[i] && typeof appState.leaderLines[i].remove === 'function') {
                    appState.leaderLines[i].remove();
                }
            } catch (_) { }
            appState.leaderLines[i] = null; 
        }
        appState.leaderLines.length = 0; 

        document.querySelectorAll('svg.leader-line, .leader-line').forEach(el => el.remove());
        appState.connections = [];
        clearSelection();

        if (typeof LeaderLine !== 'undefined' && LeaderLine._instances) {
            LeaderLine._instances = [];
        }

        if (appState.sentences.length > 0) {
            renderWorkspace(appState.sentences);
        }

        const t = TRANSLATIONS[currentLang];
        const c = document.getElementById("word-analysis-content");
        if (c) c.innerHTML = `<span class="text-muted">${esc(t.wordAnalysisEmpty)}</span>`;
        const status = document.getElementById("workspaceStatus");
        if (status) { status.textContent = t.statusReady; status.style.color = ""; }
        updateStatistics();
        saveAppStateToLocalStorage();
    }
}

/** Backward-compat alias for the Reset button */
function resetTree() { resetConnections(); }

/** Restore saved language preference from sessionStorage */
function loadLangFromStorage() {
    try {
        const saved = sessionStorage.getItem("turkref_lang");
        if (saved && TRANSLATIONS[saved]) setLanguage(saved);
    } catch (_) { }
}

// ---------------------------------------------------------------------------
// §14. Statistics Panel — real-time relation counts
// ---------------------------------------------------------------------------

/** Update the collapsible statistics accordion with live relation counts — mode-aware */
function updateStatistics() {
    const statsList = document.getElementById("statsList");
    if (!statsList) return;
    const t = TRANSLATIONS[currentLang];

    const isCoref = appState.currentMode === "coref";
    const dataSource = isCoref ? appState.coref_connections : appState.connections;

    if (dataSource.length === 0) {
        statsList.innerHTML = `<div class="text-muted">${esc(t.statsEmpty)}</div>`;
        return;
    }

    // Count each type
    const counts = Object.create(null);
    dataSource.forEach(conn => {
        let label;
        if (isCoref) {
            const typeObj = COREF_TYPES.find(ct => ct.value === conn.type);
            label = typeObj ? (currentLang === "TR" ? typeObj.tr : typeObj.en) : conn.type;
        } else {
            const relObj = RST_RELATIONS.find(r => r.value === conn.relation);
            label = relObj ? (currentLang === "TR" ? relObj.tr : relObj.en) : conn.relation;
        }
        counts[label] = (counts[label] || 0) + 1;
    });

    // Render breakdown (with percentages)
    const total = dataSource.length;
    let html = "";
    for (const [rel, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
        const perc = ((count / total) * 100).toFixed(1);
        html += `<div class="stat-item"><span>${esc(rel)}</span><strong>${count} (%${perc})</strong></div>`;
    }
    html += `<div class="stat-item stat-total"><span>${esc(t.statsTotal)}</span><strong>${total}</strong></div>`;

    statsList.innerHTML = html;
}

// ---------------------------------------------------------------------------
// §15. Undo Mechanism — remove last connection
// ---------------------------------------------------------------------------

/** Undo the most recent arrow/connection (LIFO) — mode-aware */
function undoLastConnection() {
    if (appState.currentMode === "coref") {
        if (appState.coref_connections.length === 0) return;
        removeCorefConnection(appState.coref_connections.length - 1);
    } else {
        if (appState.connections.length === 0) return;
        removeConnection(appState.connections.length - 1);
    }
}

// ---------------------------------------------------------------------------
// §16. Smart Alert Banner — platform / environment detection
// ---------------------------------------------------------------------------

/**
 * Detects whether the app is running inside Electron (Desktop EXE),
 * on a mobile/tablet browser, or on a standard desktop browser.
 * Shows a contextual warning banner accordingly.
 * Dismissal is managed via sessionStorage so it re-appears per new tab.
 */
function initSmartAlertBanner() {
    // If user already dismissed in this session, do nothing
    try {
        if (sessionStorage.getItem("turkref_alert_seen") === "1") return;
    } catch (_) { }

    const banner = document.getElementById("smart-alert-banner");
    const content = document.getElementById("smart-alert-content");
    const closeBtn = document.getElementById("close-smart-alert");
    if (!banner || !content || !closeBtn) return;

    const ua = (navigator.userAgent || "").toLowerCase();
    const isElectron = ua.indexOf("electron") !== -1;

    // Mobile / Tablet heuristic: coarse pointer OR small viewport OR touch-capable
    const isMobileOrTablet =
        navigator.maxTouchPoints > 1 ||
        /android|iphone|ipad|ipod|mobile|tablet/i.test(navigator.userAgent) ||
        window.innerWidth <= 768;

    let message = "";
    const t = TRANSLATIONS[currentLang];

    if (isElectron) {
        return;
    } else if (isMobileOrTablet) {
        message = t.alertMobile;
    } else {
        message = t.alertWeb;
    }

    content.textContent = message;
    banner.style.display = "flex";

    // Close handler
    closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
        try { sessionStorage.setItem("turkref_alert_seen", "1"); } catch (_) { }
    });
}

/**
 * Updates the visible banner text to match the current language.
 * Called from setLanguage() — does NOT re-run platform detection
 * and does NOT add duplicate event listeners.
 */
function updateSmartBannerLanguage() {
    const banner = document.getElementById("smart-alert-banner");
    const content = document.getElementById("smart-alert-content");
    if (!banner || !content || banner.style.display === "none") return;

    const t = TRANSLATIONS[currentLang];
    const ua = (navigator.userAgent || "").toLowerCase();
    const isElectron = ua.indexOf("electron") !== -1;
    if (isElectron) return;

    const isMobileOrTablet =
        navigator.maxTouchPoints > 1 ||
        /android|iphone|ipad|ipod|mobile|tablet/i.test(navigator.userAgent) ||
        window.innerWidth <= 768;

    content.textContent = isMobileOrTablet ? t.alertMobile : t.alertWeb;
}

// ---------------------------------------------------------------------------
// §17. Auto-Save & Auto-Recovery Engine (LocalStorage)
// ---------------------------------------------------------------------------

/** Serialize critical app state to localStorage for crash recovery */
function saveAppStateToLocalStorage() {
    const inputEl = document.getElementById("inputText");
    const dataToSave = {
        sentences: appState.sentences,
        connections: appState.connections,
        coref_connections: appState.coref_connections,
        coref_nextId: appState.coref_nextId,
        currentMode: appState.currentMode,
        rawInputText: inputEl ? inputEl.value : ""
    };
    try {
        localStorage.setItem("turkref_autosave_data", JSON.stringify(dataToSave));
    } catch (e) {
        console.error("Auto-save failed:", e);
    }
}

/** Restore saved session from localStorage on page load */
function loadAppStateFromLocalStorage() {
    try {
        const raw = localStorage.getItem("turkref_autosave_data");
        if (!raw) return;
        const saved = JSON.parse(raw);

        const inputEl = document.getElementById("inputText");
        if (saved.rawInputText && inputEl) inputEl.value = saved.rawInputText;
        
        if (saved.sentences && saved.sentences.length > 0) {
            // CRITICAL: Clear existing state arrays before restoration to prevent duplicate data push
            appState.sentences = saved.sentences;
            appState.currentMode = saved.currentMode || 'rst';
            appState.connections = [];
            appState.coref_connections = [];
            
            // Clean up old visual DOM footprints completely
            document.querySelectorAll('svg.leader-line, .leader-line').forEach(el => el.remove());
            appState.leaderLines = [];
            appState.coref_leaderLines = [];

            // Re-render core layouts based on data blueprint
            renderSentenceList(appState.sentences);
            if (appState.currentMode === 'coref') {
                renderCorefWorkspace(appState.sentences);
            } else {
                renderWorkspace(appState.sentences);
            }

            // Restore RST Connections cleanly without forEach push pollution
            if (saved.connections && saved.connections.length > 0) {
                appState.connections = saved.connections; // Direct reference binding
                appState.connections.forEach(c => {
                    const numSource = document.getElementById(`num-${c.sourceId}`);
                    const numTarget = document.getElementById(`num-${c.targetId}`);
                    if (numSource && numTarget && typeof LeaderLine !== "undefined") {
                        numSource.classList.add("arrow-anchor"); 
                        numTarget.classList.add("arrow-anchor");
                        const relObj = RST_RELATIONS.find(r => r.value === c.relation);
                        const relLabel = relObj ? (currentLang === "TR" ? relObj.tr : relObj.en) : c.relation;
                        const line = new LeaderLine(numSource, numTarget, {
                            color: '#3b82f6', size: 2.5, path: 'fluid', startSocket: 'left', endSocket: 'left',
                            startSocketGravity: [-50, 0], endSocketGravity: [-50, 0], dropShadow: true,
                            middleLabel: LeaderLine.pathLabel({text: relLabel, color: '#1e293b', fill: true, outlineColor: '#ffffff', fontSize: '11px', padding: [4, 8]})
                        });
                        appState.leaderLines.push(line);
                    }
                });
                renderConnectionsList();
                updateNodeBadges();
            }

            // Restore Coreference Connections cleanly
            if (saved.coref_connections && saved.coref_connections.length > 0) {
                appState.coref_nextId = saved.coref_nextId || 1;
                appState.coref_connections = saved.coref_connections; // Direct reference binding
                appState.coref_connections.forEach(c => {
                    const srcEl = document.getElementById(c.sourceWordId);
                    const tgtEl = document.getElementById(c.targetWordId);
                    if (srcEl && tgtEl && typeof LeaderLine !== "undefined") {
                        srcEl.classList.add("linked"); 
                        tgtEl.classList.add("linked");
                        const typeObj = COREF_TYPES.find(ct => ct.value === c.type);
                        const typeLabel = typeObj ? (currentLang === "TR" ? typeObj.tr : typeObj.en) : c.type;
                        const lineColor = typeObj ? typeObj.color : '#9b59b6';
                        const line = new LeaderLine(srcEl, tgtEl, {
                            color: lineColor, size: 2, path: 'fluid', startSocket: 'bottom', endSocket: 'bottom',
                            startSocketGravity: [0, 40], endSocketGravity: [0, 40], dash: { animation: true }, dropShadow: { dx: 0, dy: 1, blur: 2 },
                            middleLabel: LeaderLine.pathLabel({text: typeLabel, color: '#ffffff', outlineColor: lineColor, fontSize: '10px', padding: [3, 7]})
                        });
                        appState.coref_leaderLines.push(line);
                    }
                });
                renderCorefConnectionsList();
            }

            // Sync structural layouts and force-trigger visibility toggles
            switchMode(appState.currentMode);
            updateStatistics();
            
            // Safe fallback: If the recovered session was coref, refresh the canvas dimension footprint
            if (appState.currentMode === 'coref') {
                setTimeout(repositionArrows, 100);
            }
        }
    } catch (e) {
        console.error("Auto-recovery engine failed tightly:", e);
    }
}
