// --- NAV ---


Vue.component('dynamic-nav', {
    props: ['leftList', 'rightList', 'onSmallScreen', 'navMobileShow'],

    data: function() {
        return {
            showingMobileNav: false,

            showingBackToTop: false,
            backToTopScroll: 600
        }
    },
    
    computed: {
        headerNavStyle: function() {
            return (this.onSmallScreen) ?
                { } : { backgroundColor: 'transparent' };
        }
    },

    created: function() {
        let c = this;
        window.addEventListener('scroll', function () {
            let y = window.scrollY;
            if (y >= c.backToTopScroll) {
                if (!c.showingBackToTop) {
                    c.showingBackToTop = true;
                    c.$refs.top.classList.remove('hide');
                }
            } else {
                if (c.showingBackToTop) {
                    c.showingBackToTop = false;
                    c.$refs.top.classList.add('hide');
                }
            }
        });
    },

    template: `
        <div id="header-nav-container">
            <nav id="header-nav" :style="headerNavStyle">
                <template v-if="!onSmallScreen">
                    <div class="nav-section">
                        <a href="index.html">
                            <dynamic-svg
                                :size="'35px'"
                                :file="'logo'"
                                :alt="'MusicBee'"
                                :hover-effect="false"
                            ></dynamic-svg>
                        </a>

                        <nav-list
                            :items="leftList"
                            :dropdown-align="'left'"
                            :compact="false"
                        ></nav-list>
                    </div>

                    <div class="nav-section">
                        <nav-list
                            :items="rightList"
                            :dropdown-align="'right'"
                            :compact="true"
                            v-on="$listeners"
                        ></nav-list>
                    </div>
                </template>

                <template v-else>
                    <a href="index.html">
                        <dynamic-svg
                            :size="'35px'"
                            :file="'logo'"
                            :alt="'MusicBee'"
                            :hover-effect="false"
                            class="logo-mobile"
                        ></dynamic-svg>
                    </a>

                    <button
                        id="nav-open"
                        class="nav-mobile-button"
                        @click="toggleNav"
                    ></button>

                    <div
                        id="nav-mobile-background"
                        class="nav-mobile-background-hide"
                        ref="mobileNavBg"
                        @click="toggleNav"
                    ></div>

                    <div
                        id="header-nav-mobile"
                        class="nav-mobile-hide"
                        ref="mobileNav"
                    >
                        <div id="nav-mobile-buttons">
                            <button
                                v-if="navMobileShow > 0"
                                id="nav-back"
                                class="nav-mobile-button"
                                @click="$emit('change-nav', -1)"
                            ></button>
                            <div v-else></div>

                            <button
                                id="nav-close"
                                class="nav-mobile-button"
                                @click="toggleNav"
                            ></button>
                        </div>

                        <div id="nav-mobile-lists" class="fade-in" ref="mobileNavLists">
                            <template v-if="navMobileShow === 0">
                                <nav-list
                                    :items="rightList"
                                    :dropdown-align="'right'"
                                    :compact="true"
                                    :mobile="true"
                                    :hide-dropdown="true"
                                    :change-mobile-nav="true"
                                    v-on="$listeners"
                                    class="nav-list-row"
                                ></nav-list>

                                <nav-list
                                    :items="leftList"
                                    :dropdown-align="'left'"
                                    :compact="false"
                                    :mobile="true"
                                ></nav-list>
                            </template>

                            <template v-else-if="navMobileShow === 1">
                                <nav-list
                                    :items="[rightList[0]]"
                                    :dropdown-align="'right'"
                                    :compact="true"
                                    :mobile="true"
                                    :hide-dropdown="false"
                                    :change-mobile-nav="false"
                                    v-on="$listeners"
                                ></nav-list>
                            </template>
                            
                            <template v-else-if="navMobileShow === 2">
                                <nav-list
                                    :items="[rightList[1]]"
                                    :dropdown-align="'right'"
                                    :compact="true"
                                    :mobile="true"
                                    :hide-dropdown="false"
                                    :change-mobile-nav="false"
                                    v-on="$listeners"
                                ></nav-list>
                            </template>
                        </div>
                    </div>
                </template>
            </nav>

            <button
                id="back-to-top"
                class="hide"
                ref="top"
                onclick="window.scrollTo(0, 0)"
            >&#94;</button>
        </div>
    `,

    methods: {
        toggleNav: function() {
            this.resetAnimation(this.$refs.mobileNavLists);
            this.showingMobileNav = !this.showingMobileNav;
            let el = this.$refs.mobileNav;
            let bg = this.$refs.mobileNavBg;
            el.classList.toggle('nav-mobile-show');
            el.classList.toggle('nav-mobile-hide');
            bg.classList.toggle('nav-mobile-background-show');
            bg.classList.toggle('nav-mobile-background-hide');
            document.body.classList.toggle('overflow-hidden');
        },

        resetAnimation(el) {
            if (!el) return;
            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = null; 
        },
    }
})

// Dynamic logo (adapts to theme)
Vue.component('dynamic-svg', {
    props: ['size', 'file', 'alt', 'hoverEffect'],

    data: function() {
        return {
            srcFill: 'svg/' + this.file + '-fill.svg',
            srcOutline: 'svg/' + this.file + '-outline.svg'
        }
    },

    computed: {
        containerStyle: function() {
            return {
                width: (this.size != null) ? this.size : 'auto',
                height: (this.size != null) ? this.size : '100%'
            }
        }
    },

    template: `
        <div class="dynamic-svg-container" :class="{ 'svg-hover-container': hoverEffect }" :style="containerStyle">
            <img class="dynamic-svg svg-fill" :src="srcFill" :alt="alt">
            <img class="dynamic-svg svg-outline" :src="srcOutline" :alt="alt">
        </div>
    `
})

// Navigation menu
Vue.component('nav-list', {
    props: ['items', 'dropdownAlign', 'compact', 'mobile', 'hideDropdown', 'changeMobileNav'],

    computed: {
        dropdownStyle: function() {
            let style;

            if (!this.mobile) {
                style = (this.dropdownAlign === 'left') ?
                    { borderTopLeftRadius: '0px' } :
                    { borderTopRightRadius: '0px' };
                
                style[this.dropdownAlign] = '0';
            }

            return style;
        }
    },

    template: `
        <ul class="nav-list">
            <li v-for="(item, index) in items" class="nav-item">
                <div>
                    <span v-if="item.icon != null" v-html="item.icon"></span>
                    <a
                        v-if="item.href != null"
                        class="nav-item-link"
                        :href="item.href"
                        :target="(item.targetBlank) ? '_blank' : '_self'" 
                    >{{item.text}}</a>
                    <p
                        v-else
                        class="inline-block nav-item-link"
                        @click="$emit('change-nav', (changeMobileNav) ? index : '-99')"
                    >{{item.text}}</p>
                </div>
                <div class="nav-item-underline"></div>

                <ul
                    v-if="item.dropdown != null && !hideDropdown"
                    class="nav-dropdown nav-dropdown-left"
                    :class="{ 'nav-dropdown-compact': compact, 'nav-dropdown-mobile': mobile }"
                    :style="dropdownStyle"
                >
                    <li
                        v-for="d in item.dropdown"
                        :class="{ 'border-top': d.borderTop }"
                        class="nav-dropdown-item-li"
                    >
                        <a
                            v-if="item.dropdownTag === 'a'"
                            class="nav-dropdown-item"
                            :href="d.href"
                            :target="(d.targetBlank) ? '_blank' : '_self'"
                        >
                            <span v-if="d.icon != null" v-html="d.icon"></span>
                            {{d.text}}
                        </a>
                        <button
                            v-else class="nav-dropdown-item"
                            @click="$emit(d.clickEvent, d.key)"
                        >
                            <span v-if="d.icon != null" v-html="d.icon"></span>
                            {{d.text}}
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    `
})


// --- BUTTONS / LINKS ---


//Dynamic button (adapts to theme)
Vue.component('dynamic-button', {
    props: ['tag', 'text', 'sizeClass', 'tier', 'href', 'targetBlank', 'inputType'],

    template: `
        <div class="inline-block">
            <a
                v-if="tag === 'a'"
                class="a-button"
                :class="[ (sizeClass.length > 0) ? sizeClass : '', tier ]"
                :href="href"
                :target="(targetBlank) ? true : false"
                v-html="text"
            ></a>

            <button
                v-else-if="tag === 'button'"
                :class="[ (sizeClass.length > 0) ? sizeClass : '', tier ]"
                @click="$emit('click-event')"
                v-html="text"
            ></button>

            <input
                v-else-if="tag === 'input'"
                class="dynamic-input"
                :class="[ (sizeClass.length > 0) ? sizeClass : '', tier ]"
                :type="inputType"
                :value="text"
            ></input>
        </div>
    `
})

// Buttons of different hierarchy
Vue.component('primary-button', {
    props: ['tag', 'text', 'sizeClass', 'href', 'targetBlank', 'inputType'],

    template: `
        <div class="inline-block">
            <dynamic-button
                :tag="tag"
                :text="text"
                :size-class="sizeClass"
                :tier="'primary-button'"
                :href="href"
                :targetBlank="targetBlank"
                :input-type="inputType"
                @click-event="$emit('click-event')"
            ></dynamic-button>
        </div>
    `
})

Vue.component('secondary-button', {
    props: ['tag', 'text', 'sizeClass', 'href', 'targetBlank', 'inputType'],

    template: `
        <div class="inline-block">
            <dynamic-button
                :tag="tag"
                :text="text"
                :size-class="sizeClass"
                :tier="'secondary-button'"
                :href="href"
                :targetBlank="targetBlank"
                :input-type="inputType"
                @click-event="$emit('click-event')"
            ></dynamic-button>
        </div>
    `
})

Vue.component('tertiary-button', {
    props: ['tag', 'text', 'sizeClass', 'href', 'targetBlank', 'inputType'],

    template: `
        <div class="inline-block">
            <dynamic-button
                :tag="tag"
                :text="text"
                :size-class="sizeClass"
                :tier="'tertiary-button'"
                :href="href"
                :targetBlank="targetBlank"
                :input-type="inputType"
                @click-event="$emit('click-event')"
            ></dynamic-button>
        </div>
    `
})


// --- FOOTER ---


Vue.component('dynamic-footer', {
    props: ['texts', 'altColors'],

    template: `
        <footer>
            <div id="donate" class="one-column">
                <p>{{texts.donate.body}}</p>

                <div id="donate-button">
                    <tertiary-button
                        :tag="'a'"
                        :text="texts.donate.button"
                        :size-class="''"
                        :href="'#'"
                    ></tertiary-button>
                </div>
            </div>

            <div id="copyright">
                <p>
                    <span
                        class="highlighted-text bold-text"
                        :class="{ 'alt-copyright': altColors }"
                    >{{texts.copyright[0]}}</span>

                    <heart :size="'12px'" :alt-color="altColors"></heart>

                    <span
                        class="highlighted-text bold-text"
                        :class="{ 'alt-copyright': altColors }"
                    >{{texts.copyright[1]}}</span> | v2.0<br>

                    {{texts.copyright[2]}}
                </p>
            </div>

            <ul id="contact" class="one-column">
                <li class="social-media">
                    <a href="https://twitter.com/musicbeeplayer" target="_blank">
                        <img class="social-media-outline" src="svg/social-media/twitter-outline.svg" alt="MusicBee on Twitter"></img>
                        <img class="social-media-fill" src="svg/social-media/twitter-fill.svg" alt="MusicBee on Twitter"></img>
                    </a>
                </li>
                <li class="social-media">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img class="social-media-outline" src="svg/social-media/instagram-outline.svg" alt="MusicBee on Instagram"></img>
                        <img class="social-media-fill" src="svg/social-media/instagram-fill.svg" alt="MusicBee on Instagram"></img>
                    </a>
                </li>
            </ul>
        </footer>
    `
})


// --- ADDONS ---


Vue.component('addon-card', {
    props: ['addon', 'by'],

    template: `
        <li class="addon-card">
            <a class="addon-card-link" href="#">

                <div class="addon-card-thumbnail-container">
                    <img class="addon-card-thumbnail" :src="'img/addons/' + addon.thumbnail" :alt="addon.title">
                </div>

                <div class="addon-card-text">
                    <div class="addon-card-likes">
                        <heart :size="'14px'"></heart>
                        <p class="small-text"><b>{{addon.likes}}</b></p>
                    </div>

                    <h4 class="addon-card-title">{{addon.title}}</h4>

                    <p class="small-text">{{by}} {{addon.author}}</p>
                </div>
            </a>
        </li>
    `
})


// --- OTHER ---


Vue.component('heart', {
    props: ['size', 'altColor'],

    computed: {
        heartStyle: function() {
            return {
                width: this.size,
                height: this.size,
            }
        }
    },

    template: `
        <span class="heart" :class="{ 'heart-alt-color': altColor }" :style="heartStyle"></span>
    `
})


// --- APP ---


const vueApp = new Vue({
    el: '#app',

    data: {
        currentLang: 'en',

        themes: THEMES,
        currentTheme: 'light',
        firstThemeChange: true,
        favicon: document.getElementById('favicon'),

        windowWidth: window.innerWidth,
        navMobileShow: 0,

        // Add-ons
        addonSelected: 'all',

        // PROTOTYPE
        releases: RELEASES,
        addons: ADDONS,
        topMembers: TOPMEMBERS
    },

    computed: {
        currentPage() { return window.location.pathname.split('/').pop().split('.')[0]; },
        // Current language (object)
        lang() { return LANGS[this.currentLang]; },
        // Current page texts (object)
        pTexts() {
            let t = this.lang[this.currentPage];
            if (t) return t;
            else return LANGS.en[this.currentPage];
        },
        // Current theme (object)
        theme() { return THEMES[this.currentTheme]; },

        appStyle() {
            return {
                '--color-primary': this.theme.colors.primary,
                '--color-secondary': this.theme.colors.secondary,
                '--color-text': this.theme.colors.text,
                '--color-bg': this.theme.colors.bg,
                '--color-bg2': this.theme.colors.bg2,
                '--border-radius': this.theme.borderRadius,
                '--box-shadow-light': this.theme.boxShadow.light,
                '--box-shadow-normal': this.theme.boxShadow.normal,
                '--box-shadow-strong': this.theme.boxShadow.strong,
                '--svg-outline-filter': this.theme.svgOutlineFilter,
                '--svg-fill-filter': this.theme.svgFillFilter,
                '--bee-bg-opacity': this.theme.beeBgOpacity
            }
        },

        navLeftList() {
            let n = this.lang.nav;

            let list = [
                {
                    text: n.download,
                    href: 'download.html',
                    targetBlank: false
                },
                {
                    text: n.addons,
                    href: 'addons.html',
                    targetBlank: false,
                    dropdownTag: 'a',
                    dropdown: [
                        {
                            text: n.skins,
                            href: 'addons.html?filter=skins'
                        },
                        {
                            text: n.plugins,
                            href: 'addons.html?filter=plugins'
                        },
                        {
                            text: n.visualizer,
                            href: 'addons.html?filter=visualizer',
                            borderTop: true
                        },
                        {
                            text: n.theaterMode,
                            href: 'addons.html?filter=theaterMode'
                        },
                        {
                            text: n.misc,
                            href: 'addons.html?filter=misc'
                        }
                    ]
                },
                {
                    text: n.forum
                },
                {
                    text: n.help,
                    href: 'help.html',
                    targetBlank: false,
                    dropdownTag: 'a',
                    dropdown: [
                        {
                            text: n.faq,
                            href: 'help.html',
                            targetBlank: false,
                        },
                        {
                            text: n.devApi,
                            href: 'api.html',
                            targetBlank: false
                        },
                        {
                            text: n.reportBug,
                            href: 'report.html',
                            targetBlank: false
                        },
                        {
                            text: n.releaseNotes,
                            borderTop: true,
                            href: 'releases.html',
                            targetBlank: false
                        },
                        {
                            text: n.wiki,
                            href: 'https://musicbee.fandom.com/wiki/MusicBee_Wiki',
                            targetBlank: true
                        }
                    ]
                }
            ];

            if (this.onSmallScreen) {
                list.unshift(
                    {
                        text: n.home,
                        href: 'index.html',
                        targetBlank: false
                    }
                );
            }

            return list;
        },

        navRightList() {
            let nv = [];

            // Themes
            
            nv.push(
                {
                    text: this.lang.themes[this.currentTheme],
                    icon: this.themeColorElement(this.theme.colors.primary),
                    dropdownTag: 'button',
                    dropdown: []
                }
            );

            Object.entries(THEMES).forEach(
                ([key, value]) => nv[0].dropdown.push(
                    {
                        key: key,
                        text: this.lang.themes[key],
                        icon: this.themeColorElement(value.colors.primary),
                        clickEvent: 'change-theme'
                    }
                )
            );

            // Languages

            nv.push(
                {
                    text: this.lang.name,
                    dropdownTag: 'button',
                    dropdown: []
                }
            );

            Object.entries(LANGS).forEach(
                ([key, value]) => nv[1].dropdown.push(
                    {
                        key: key,
                        text: value.name,
                        clickEvent: 'change-language'
                    }
                )
            );

            return nv;
        },

        features() {
            let f = this.pTexts.features.list;

            return [
                {
                    title: f[0].title,
                    body: f[0].body,
                    file: 'playback'
                },
                {
                    title: f[1].title,
                    body: f[1].body,
                    file: 'surround'
                },
                {
                    title: f[2].title,
                    body: f[2].body,
                    file: 'groove'
                },
                {
                    title: f[3].title,
                    body: f[3].body,
                    file: 'plugins'
                }
            ]
        },

        // Themes' keys in array
        keysArray() { return Object.keys(this.themes); },

        helpMainLinks() {
            let h = this.lang.help.mainLinks;
            return [
                {
                    title: h.gettingStarted,
                    svg: 'getting-started',
                    href: 'https://musicbee.fandom.com/wiki/The_Anatomy_of_MusicBee' 
                },
                {
                    title: h.customization,
                    svg: 'customization',
                    href: 'https://musicbee.fandom.com/wiki/Skins' 
                },
                {
                    title: h.organizing,
                    svg: 'auto-organize',
                    href: 'https://musicbee.fandom.com/wiki/File_Organization' 
                },
                {
                    title: h.devApi,
                    svg: 'dev-api',
                    href: 'https://musicbee.fandom.com/wiki/Tutorial:_Creating_A_Simple_Plugin' 
                }
            ];
        },

        onSmallScreen() {
            return (this.windowWidth <= 1000);
        }
    },

    methods: {
        themeColorElement(color) {
            return '<span class="nav-theme-color" style="background-color:' + color + '"></span>';
        },

        // Change current language
        changeLanguage(key) {
            this.currentLang = key;
            localStorage.setItem('language', key);
            this.changeMobileNav(-1);
            // Page Title
            this.updatePageTitle()
        },

        // Change the current theme
        changeTheme(key) {
            if (key === this.currentTheme && !this.firstThemeChange) return;
            firstThemeChange = false;
            
            this.currentTheme = key;
            localStorage.setItem('theme', key);

            this.changeMobileNav(-1);

            this.updateFavicon();
        },

        // Get either the next or the previous theme
        adjacentTheme(dir) {
            let adjacentTheme = this.keysArray.indexOf(this.currentTheme) + dir;
            if (adjacentTheme < 0) adjacentTheme = this.keysArray.length-1;
            else if (adjacentTheme >= this.keysArray.length) adjacentTheme = 0; 
            this.changeTheme(this.keysArray[adjacentTheme]);
        },

        setRandomTheme() {
            // Choose a random theme, making sure it's not the current one
            let randomKey = this.currentTheme;
            while (randomKey === this.currentTheme)
                randomKey = this.keysArray[Math.floor(Math.random() * this.keysArray.length)];
            // Apply
            this.changeTheme(randomKey);
        },

        changeAddonFilter(key) {
            this.addonSelected = key;
            this.resetAnimation(this.$refs.addonsCategories);
            this.$refs.addonsCategories.classList.add('fade-in');
        },

        resetAnimation(el) {
            if (!el) return;
            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = null; 
        },

        onResize() {
            this.windowWidth = window.innerWidth;
        },

        changeMobileNav(nv) {
            let newNavValue = nv + 1;
            if (newNavValue < 0) return;
            this.navMobileShow = newNavValue;
            this.resetAnimation(this.$refs.nav.$refs.mobileNavLists);
        },

        updatePageTitle() {
            document.title = this.pTexts.pageTitle;
        },

        updateFavicon() {
            this.favicon.setAttribute('href','img/icons/' + this.currentTheme +'.png');
        }
    },

    created() {
        // Apply stored theme before HTML elements load
        let storedTheme = localStorage.getItem('theme');
        this.currentTheme = (storedTheme === null) ? this.keysArray[0] : storedTheme;
        // Also apply language
        let storedLang = localStorage.getItem('language');
        if (storedLang != null) this.currentLang = storedLang;
        else {
            let navigatorLang = navigator.language || navigator.userLanguage;
            let defLang = 'en';
            if (navigatorLang && navigatorLang.slice(0, 2) === 'es') defLang = 'es';
            this.currentLang = defLang;
        }
        // Read parameters
        let params = new URLSearchParams(document.location.search);
        if (this.currentPage === 'addons') {
            let filter = params.get('filter');
            if (filter) this.addonSelected = filter;
        }
    },

    mounted() {
        // Window size
        this.$nextTick(() => window.addEventListener('resize', this.onResize));
        // Page Title & Favicon
        this.updatePageTitle();
        this.updateFavicon();
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    }
})