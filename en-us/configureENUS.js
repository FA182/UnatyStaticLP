/**
 * Created by seanmccall on 5/5/18.
 */

var unatyData = {
    announcement: {
        main: 'Join us on May 24th for our Webinar',
        itemText: 'Make your organization GDPR ready',
        itemLink: 'https://www.unaty.de/en-us/webinars/05-24-18.html',
        actionText: 'Register now →',
        actionLink: "mailto:hello@unaty.de?subject=May 24 Webinar&body=Hi, I'd like to register for the upcoming webinar on May 24th. Thanks!",
        enabled: true
    },
    global: {
      promises: 'Free Unaty Platform ● Simple Setup ● GDPR compliant'
    },
    indexPage: {
        heroTitle: 'Reach, activate and connect your community',
        heroSubtext: 'Bring people together and make community life more pleasant, passionate and productive - all on the first social administration platform made with members in mind.'
    },
    webinars: [
        {
            name: 'Make your organization GDPR ready',
            date: 'May 24th @ 10AM EST',
            desc: 'Insights into the requirements and impact of the GDPR and a step-by-step guide on how to make your organization ready.',
            slug: '05-24-18',
            img: 'https://unaty-media.s3.amazonaws.com/organizations/PDkydbno2wA2Wwfzk/public/main/1526141862628'
        },
        {
            name: 'Reduce administration and reach more members',
            date: 'May 31st @ 10AM EST',
            desc: 'Best practice advice and insights on how to raise awareness and reach potential members. We will be covering how to use Unaty to capture, convert and onboard new members.',
            slug: '05-31-18',
            img: 'https://unaty-media.s3.amazonaws.com/organizations/PDkydbno2wA2Wwfzk/public/main/1525541415738'
        },
        {
            name: 'Activate your community and inspire action',
            date: 'June 7th @ 10AM EST',
            desc: 'Best practice advice and insights on how to activate your community, engage and inspire your members. We will be covering how to use Unaty to activate your members and supporters and increase participation.',
            slug: '06-07-18',
            img: 'https://unaty-media.s3.amazonaws.com/users/undefined/public/1525457194538'
        },
        {
            name: 'Raise awareness and reach more members',
            date: 'June 14th @ 10AM EST',
            desc: 'Best practice advice and insights on how to raise awareness and reach potential members. We will be covering how to use Unaty to capture, convert and onboard new members.',
            slug: '06-14-18',
            img: 'https://unaty-media.s3.amazonaws.com/users/undefined/public/1525457287078'
        }
    ],
    blogs: [
        {
            name: 'Unaty Platform Update #1',
            link: 'https://blog.unaty.de/unaty-platform-update-1-a8ff76999fc2'
        },
        {
            name: 'Building a Better Society',
            link: 'https://blog.unaty.de/building-a-better-world-8fa4ee557c9f'
        },
        {
            name: 'Products & Services Pricing',
            link: 'https://blog.unaty.de/unaty-products-services-pricing-25247e6ce379'
        }
    ],
    products: [
        {
            name: 'Build',
            slug: 'build',
            desc: 'Standardize, simplify and automate community administration',
            icon: 'teal magic',
            iconMobile: 'teal magic'
        },
        {
            name: 'Engage',
            slug: 'engage',
            desc: 'Increase participation by reaching Members based on their interests',
            icon: 'red lightning',
            iconMobile: 'red lightning'
        },
        {
            name: 'Grow',
            slug: 'grow',
            desc: 'Raise online awareness and reach more potential members',
            icon: 'green icon-growicon grow-icon-2',
            iconMobile: 'green icon-growicon grow-icon-3 position-relative'
        }
    ],
    useCases: [
        {
            name: 'Reduce administration and reach more members',
            slug: 'easy-administration',
            type: 'Community Administration',
            desc: 'Simply send an email to update members or create content. Personalize messages to your members and get their attention.',
            tagline: 'Like having your own administrative assistant.',
            poweredBy: '<div>Powered by: <span class="final-powered-by-icon"><i class="ui icon teal magic"></i> Build</span> + <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></div>',
            poweredByMobile: '<span class="nmm-uc-2">Powered by: <span class="final-powered-by-icon"><i class="ui icon teal magic"></i> Build</span>  + <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></span>',
            poweredByList: '<div>Powered by: <span class="final-powered-by-icon"><i class="ui icon teal magic"></i> Build</span>  + <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></div>'
        },
        {
            name: 'Activate your community and inspire action',
            slug: 'activate-members',
            type: 'Member Engagement',
            desc: 'Start community conversations and achieve more together by building deeper relationships with members and supporters.',
            tagline: 'Get your team together.',
            poweredBy: '<div>Powered by: <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span> </div>',
            poweredByMobile: '<span class="nmm-uc-2">Powered by: <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></span>',
            poweredByList: '<div>Powered by:<span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></div>'
        },
        {
            name: 'Raise awareness and recruit new members',
            slug: 'recruit-members',
            type: 'Membership Growth',
            desc: 'Simple solutions to reach potential members, raise awareness and grow community membership.',
            tagline: 'Increase community impact and grow membership.',
            poweredBy: '<div>Powered by: <span class="final-powered-by-icon"><i class="ui icon green grow-icon-3 icon-growicon position-relative"></i> Grow</span> + <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></div>',
            poweredByMobile: '<span class="nmm-uc-2">Powered by: <span class="final-powered-by-icon"><i class="ui icon green  grow-icon-3 icon-growicon position-relative"></i> Grow</span> + <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></span>',
            poweredByList: '<div>Powered by: <span class="final-powered-by-icon"><i class="ui icon green  grow-icon-3 icon-growicon position-relative"></i> Grow</span>  + <span class="final-powered-by-icon"><i class="ui icon red lightning"></i> Engage</span></div>'
        },
        {
            name: 'Make your organization GDPR compliant',
            slug: 'gdpr-compliant',
            type: 'GDPR Compliance',
            desc: 'Professional GDPR compliance for your organization made easy.',
            tagline: 'Like having your own administrative assistant.',
            poweredBy: '<div>Powered by: <span class="final-powered-by-icon"><i class="ui icon teal magic"></i> Build</span></div>',
            poweredByMobile: '<span class="nmm-uc-2">Powered by: <span class="final-powered-by-icon"><i class="ui icon teal magic"></i> Build</span>  </span>',
            poweredByList: '<div>Powered by: <span class="final-powered-by-icon"><i class="ui icon teal magic"></i> Build</span></div>'
        }
    ]
}

var menu = '<div class=" LandingMenu"> <div class="ui container"> <div class="LandingMenuImg cursor-pointer"> <a href="https://www.unaty.de/en-us/index.html"> <img src="https://unaty-media.s3.amazonaws.com/static/logos/logoNormal.png" alt="Logo"> </a> </div> <div class="ui orange large text hideOnTablet menu"> <div class="item richItemMenu"> <span id="menuProducts">Products</span> <div id="menuProductsContainer" class="ui bottom center wide basic popup transition noPaddingPopup animated fadeIn animationSpeedUp unatyNewMenuPopup"> <div> <a href="https://www.unaty.de/en-us/products/'+unatyData.products[0].slug+'.html" class="newMenuMainItem marginTop12 hoverItemMenu"> <div> <i class="ui icon '+unatyData.products[0].icon+'"></i> </div> <div> <div><span><script type="text/javascript">document.write(unatyData.products[0].name)</script></span></div> <div> <span> <script type="text/javascript">document.write(unatyData.products[0].desc)</script> </span> </div> </div> </a> <a href="https://www.unaty.de/en-us/products/'+unatyData.products[1].slug+'.html" class="newMenuMainItem hoverItemMenu"> <div> <i class="ui icon '+unatyData.products[1].icon+'"></i> </div> <div> <div><span><script type="text/javascript">document.write(unatyData.products[1].name)</script></span></div> <div> <span> <script type="text/javascript">document.write(unatyData.products[1].desc)</script> </span> </div> </div> </a> <a href="https://www.unaty.de/en-us/products/'+unatyData.products[2].slug+'.html" class="newMenuMainItem paddingBottom16 hoverItemMenu"> <div> <i class="ui icon '+unatyData.products[2].icon+'"></i> </div> <div> <div><span><script type="text/javascript">document.write(unatyData.products[2].name)</script></span></div> <div> <span> <script type="text/javascript">document.write(unatyData.products[2].desc)</script> </span> </div> </div> </a> <div class="unaty-platform-menu-text marginBottom12"> All Products are built on the free<br/> <a href="https://www.unaty.de/en-us/unaty-platform.html">Unaty Platform →</a> </div> </div> </div> </div> <div class="item richItemMenu"> <span id="menuForum">Use Cases</span> <div id="menuForumContainer" class="ui bottom center wide basic popup transition noPaddingPopup animated fadeIn animationSpeedUp unatyNewMenuPopup animated fadeIn"> <a href="https://www.unaty.de/en-us/use-cases/'+unatyData.useCases[0].slug+'.html" class="menu-use-case marginTop12"> <div> <script type="text/javascript">document.write(unatyData.useCases[0].name)</script> </div> <script type="text/javascript">document.write(unatyData.useCases[0].poweredBy)</script> </a> <a href="https://www.unaty.de/en-us/use-cases/'+unatyData.useCases[1].slug+'.html" class="menu-use-case"> <div> <script type="text/javascript">document.write(unatyData.useCases[1].name)</script> </div> <script type="text/javascript">document.write(unatyData.useCases[1].poweredBy)</script> </a> <a href="https://www.unaty.de/en-us/use-cases/'+unatyData.useCases[2].slug+'.html" class="menu-use-case"> <div> <script type="text/javascript">document.write(unatyData.useCases[2].name)</script> </div> <script type="text/javascript">document.write(unatyData.useCases[2].poweredBy)</script> </a><a href="https://www.unaty.de/en-us/use-cases/'+unatyData.useCases[3].slug+'.html" class="menu-use-case"> <div> <script type="text/javascript">document.write(unatyData.useCases[3].name)</script> </div> <script type="text/javascript">document.write(unatyData.useCases[3].poweredBy)</script> </a> <div class="unaty-usecase-menu-text marginBottom12"> Unaty offers 3 products that used seperately or be combined to fit your community’s needs - <a href="https://www.unaty.de/en-us/pricing.html">See Pricing →</a> </div> </div> </div> <div class="item richItemMenu"> <span id="menuForum"><a href="https://www.unaty.de/en-us/pricing.html">Pricing</a></span> </div> <div class="item richItemMenu"> <span id="menuCompany">Resources</span> <div id="menuCompanyContainer" class="ui bottom center wide basic popup transition noPaddingPopup animated fadeIn animationSpeedUp unatyNewMenuPopup"> <div> <div class="newMenuBlogItem marginTop12"> <div><i aria-hidden="true" class="purple video camera icon"></i></div> <div> <div><span>Upcoming webinar</span> </div> <div> <a href="https://www.unaty.de/en-us/webinars/'+unatyData.webinars[0].slug+'.html" class="webinarMenuItem"> <img src="'+unatyData.webinars[0].img+'" /> <div>'+unatyData.webinars[0].name+'</div> <div>'+unatyData.webinars[0].date+'</div> </a> </div> </div> </div> <div class="newMenuBlogItem marginTop12"> <div><i aria-hidden="true" class="blue newspaper icon"></i></div> <div> <div><span>From the Blog</span> </div> <div> <div><a target="_blank" href="'+unatyData.blogs[0].link+'">'+unatyData.blogs[0].name+'</a></div> <div><a target="_blank" href="'+unatyData.blogs[1].link+'">'+unatyData.blogs[1].name+'</a></div> <div><a target="_blank" href="'+unatyData.blogs[2].link+'">'+unatyData.blogs[2].name+'</a></div> </div> </div> </div> <a href="https://www.unaty.de/en-us/webinars.html" class="newMenuSubitem2 paddingTop16"> <div><i aria-hidden="true" class="video play icon"></i></div> <div> <div><span>Webinars</span></div> </div> </a> <a href="https://www.unaty.de/en-us/company/about.html" class="newMenuSubitem2 paddingTop16"> <div><i aria-hidden="true" class="heart icon"></i></div> <div> <div><span>About Unaty</span></div> </div> </a> <a href="http://help.unaty.de" target="_blank" class="newMenuSubitem2"> <div><i aria-hidden="true" class="help circle icon"></i></div> <div> <div><span>Help Center</span></div> </div> </a> <a href="https://www.unaty.de/en-us/company/security.html" class="newMenuSubitem2 marginBottom12"> <div><i aria-hidden="true" class="lock icon"></i></div> <div> <div><span>Data Security</span></div> </div> </a> </div> </div> </div> <div class="item richItemMenu"> <span id="menuForum"><a href="https://app.unaty.de/login?source=landing_page_menu">Log in</a></span> </div> <div class="menuMainLanguageSwitcher"> <div class=""> <div role="listbox" id="switchLanguagesDropdown" aria-expanded="false" class="ui inline dropdown rightAlignOffsetMenu" tabindex="0"> <span><i class="us flag"></i></span><i aria-hidden="true" class="dropdown icon"></i> <div id="showMenu" class="menu transition"> <a href="https://www.unaty.de/en-us/index.html" role="option" aria-checked="true" aria-selected="true" class="active selected item" style="pointer-events: all;"><i class="us flag"></i><span class="text">English</span></a> <a href="https://www.unaty.de/de-de/index.html" role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><i class="de flag"></i><span class="text">German</span></a> </div> </div> </div> </div> <a class="ui button blue compact menuButtonBlue" aria-current="false" target="_blank" href="https://app.unaty.de/get-started?_source=landingPageMenuSignUp"><span>Try Unaty</span></a> </div> <div class="ui orange large text marginRight16 hideOnDesktop menu"> <a class="ui button blue compact menuButtonBlue" aria-current="false" target="_blank" href="https://app.unaty.de/get-started?_source=landingPageMenuSignUp"><span>Try Unaty</span></a> </div> <div class="ui orange large text hideOnDesktop menu"> <div class="item landingHamburger" id="landingHamburger"><i aria-hidden="true" class="sidebar icon"></i> </div> </div> <div id="mobileMenu" class="landingMobileMenuFull menu-outer-padding animated fadeIn animationSpeedUp hidden-block" style=""> <div class="new-mobile-menu-top"> <div> <img src="https://unaty-media.s3.amazonaws.com/users/undefined/public/1524137274188"/> </div> <div><span id="closeMobileMenu"><i class="ui icon x"></i></span></div> </div> <div> <div class="ui divider hidden"></div> <div class="nmm-tc"> <a class="ui button blue compact menuButtonBlue" aria-current="false" target="_blank" href="https://app.unaty.de/get-started?_source=landingPageMenuSignUp"><span>Try Unaty</span></a> or <a href="https://app.unaty.de/login?source=landing_page_menu">Log in</a> </div> </div> <div> <div class="ui stackable grid"> <div class="two column row"> <div class="column"> <div class="ui header dividing">Products</div> <div class="ui vertical list relaxed"> <a href="https://www.unaty.de/en-us/products/'+unatyData.products[0].slug+'.html" class="nmmPI item"> <i class="ui icon '+unatyData.products[0].iconMobile+'"></i> <span><script type="text/javascript">document.write(unatyData.products[0].name)</script></span> </a> <a href="https://www.unaty.de/en-us/products/'+unatyData.products[1].slug+'.html" class="nmmPI item"> <i class="ui icon '+unatyData.products[1].iconMobile+'"></i> <span><script type="text/javascript">document.write(unatyData.products[1].name)</script></span> </a> <a href="https://www.unaty.de/en-us/products/'+unatyData.products[2].slug+'.html" class="nmmPI item"> <i class="ui icon '+unatyData.products[2].iconMobile+'"></i> <span><script type="text/javascript">document.write(unatyData.products[2].name)</script></span> </a> </div> </div> <div class="one column row"> <div class="column"> <div class="nmm-ptext"> All Products are built on the free <a href="https://www.unaty.de/en-us/unaty-platform.html">Unaty Platform →</a> </div> </div> </div> <div class="column"> <div class="ui header dividing">Use Cases</div> <div class="ui vertical list relaxed"> <a href="https://www.unaty.de/en-us/use-cases/'+unatyData.useCases[0].slug+'.html" class="item nmm-item"> <span class="nmm-uc-1"> <script type="text/javascript">document.write(unatyData.useCases[0].name)</script> </span> <script type="text/javascript">document.write(unatyData.useCases[0].poweredByMobile)</script> </a> <a href="https://www.unaty.de/en-us/use-cases/'+unatyData.useCases[1].slug+'.html" class="item nmm-item"> <span class="nmm-uc-1"> <script type="text/javascript">document.write(unatyData.useCases[1].name)</script> </span> <script type="text/javascript">document.write(unatyData.useCases[1].poweredByMobile)</script> </a> <a href="https://www.unaty.de/en-us/use-cases/'+unatyData.useCases[2].slug+'.html" class="item nmm-item"> <span class="nmm-uc-1"> <script type="text/javascript">document.write(unatyData.useCases[2].name)</script> </span> <script type="text/javascript">document.write(unatyData.useCases[2].poweredByMobile)</script> </a> </div> </div> <div class="one column row"> <div class="column"> <div class="nmm-ptext"> Unaty offers 3 products that used seperately or be combined to fit your community’s needs - <a href="https://www.unaty.de/en-us/pricing.html">See Pricing →</a> </div> </div> </div> </div> </div> </div> <div class="ui divider hidden"></div> <div> <div class="ui header dividing">Resources</div> <div class="ui horizontal list relaxed"> <a href="https://www.unaty.de/en-us/company/about.html" class="item"><span>About</span></a> <a href="https://www.unaty.de/en-us/company/contact-us.html" class="item"><span>Contact</span></a> <a href="https://www.unaty.de/en-us/webinars.html" class="item"><span>Webinars</span></a> <a href="https://www.unaty.de/en-us/company/security.html" class="item"><span>Data Security</span></a> <a href="https://www.unaty.de/en-us/company/imprint.html" class="item"><span>Imprint</span></a> </div> </div> </div> </div> <span></span></div> '

var footer = '<div class="LandingHomeFooter"> <div class="ui fluid container"> <div class="ui container"> <div style="padding: 2em; margin-bottom: 2em;"> <div class="ui grid"> <div class="row"> <div class="three wide computer sixteen wide mobile three wide tablet column"> <div class="ui header grey topMargin18 uiGreyHeader"><span>Products</span> </div> <div role="list" class="ui large link list relaxed"> <a role="listitem" class="item" href="https://www.unaty.de/en-us/products/build.html"><span>Build</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/products/grow.html"><span>Grow</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/products/engage.html"><span>Engage</span></a> </div> <div class="ui divider"> </div> <div role="list" class="ui large link list relaxed"> <a role="listitem" class="item" href="https://www.unaty.de/en-us/pricing.html"><span>View Pricing</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/unaty-platform.html"><span>Unaty Platform</span><span class="platform-free-span">FREE</span></a> </div> </div> <div class="six wide computer sixteen wide mobile seven wide tablet column"> <div class="ui header grey topMargin18 uiGreyHeader"><span>Use Cases</span> </div> <div role="list" class="ui large link list relaxed"> <a role="listitem" class="item " href="https://www.unaty.de/en-us/use-cases/easy-administration.html"><span>Reduce administration and reach more members</span></a> <a role="listitem" class="item " href="https://www.unaty.de/en-us/use-cases/activate-members.html"><span>Activate your community and inspire action</span></a> <a role="listitem" class="item " href="https://www.unaty.de/en-us/use-cases/recruit-members.html"><span>Raise awareness and recruit new members</span></a> </div> </div> <div class="four wide computer sixteen wide mobile three wide tablet column"> <div class="ui header grey topMargin18 uiGreyHeader"><span>Resources</span> </div> <div role="list" class="ui large link list relaxed"> <a role="listitem" class="item" href="https://www.unaty.de/en-us/webinars.html"><span>Webinars</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/company/security.html"><span>Security</span></a> <a role="listitem" class="item" href="http://help.unaty.de/" target="_blank"><span>Help Center</span></a> <a role="listitem" class="item" target="_blank" href="https://app.unaty.de/compass/explore"><span>Compass</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/policies.html"><span>Privacy & Terms</span></a> <a target="_blank" href="http://status.unaty.de/" role="listitem" class="item statusFooterArea"><i aria-hidden="true" class="green circle icon"></i><span>All Systems online</span></a> </div> </div> <div class="three wide computer sixteen wide mobile three wide tablet column"> <div class="ui header grey topMargin18 uiGreyHeader"><span>Company</span> </div> <div role="list" class="ui large link list relaxed"> <a role="listitem" class="item" href="https://www.unaty.de/en-us/company/about.html"><span>About</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/company/contact-us.html"><span>Contact</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/company/careers.html"><span>Careers</span></a> <a role="listitem" class="item" href="https://www.unaty.de/en-us/company/imprint.html"><span>Imprint</span></a> </div> </div> </div> </div> </div> <div style="padding: 32px;"> <div class="ui stackable grid"> <div class="row"> <div class="five wide computer five wide mobile five wide tablet column footerMenuLang flex-display"> <div class="img-footer-holder"> <img src="https://unaty-media.s3.amazonaws.com/users/undefined/public/1524137274188"/> </div> <div> <span class="copyrightText">© 2018 Unaty Technologies GmbH</span> </div> </div> <div class="eleven wide computer eleven wide mobile eleven wide tablet column"> <div role="list" class="ui horizontal list float-right"><a target="_blank" role="listitem" class="item" href="https://www.facebook.com/unatyde"><i aria-hidden="true" class="facebook square large icon"></i></a><a target="_blank" role="listitem" class="item" href="https://www.linkedin.com/company/12904664/"><i aria-hidden="true" class="linkedin square large icon"></i></a><a target="_blank" role="listitem" class="item" href="https://twitter.com/unatyde"><i aria-hidden="true" class="twitter square large icon"></i></a><a target="_blank" role="listitem" class="item" href="https://blog.unaty.de"><i aria-hidden="true" class="medium large icon"></i></a></div> </div> </div> </div> </div> </div> </div> </div>'

var signUp = '<div class="final-general-section"> <div class="ui fluid container"> <div class="ui container"> <div class="unaty-sign-up-box"> <div> <div>Get started for free</div> <div>Use the Unaty platform free and try all products free for 14 days </div> </div> <div class="minWidth400"> <div> <div class="ui action input input250 final-sign-up-button"> <input id="emailInput1" type="text" placeholder="Enter your Email.."/> <button id="getStartedBtn1" class="ui button blue large compact" role="button">Try Unaty </button> </div> </div> <div class="extra-infos-subset"> '+unatyData.global.promises+' </div> </div> </div> </div> </div> </div>'

if(unatyData.announcement.enabled) {
    var accouncement = '<div class="announcementBar" id="webinarAnnouncement">'+unatyData.announcement.main+': <a href="'+unatyData.announcement.itemLink+'">'+unatyData.announcement.itemText+'</a> - <a href="'+unatyData.announcement.actionLink+'">'+unatyData.announcement.actionText+'</a></div>'
} else {
    var accouncement = null;
}

var headData = '<link rel="shortcut icon" href="https://unaty-media.s3.amazonaws.com/organizations/pGqEDhGidq4GBKqdc/public/main/1512577221910"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta charset="utf-8"> <meta name="keywords" content="association management software, membership management, membership website, create a membership website, build a membership website, best membership sites, knowledge management system, church membership software"> <meta name="apple-mobile-web-app-title" content="Unaty"> <meta name="application-name" content="Unaty"> <meta name="author" content="Unaty Technologies GmbH"> <link href="https://www.unaty.de/" rel="canonical"> <meta content="index, follow" name="robots"> <meta name="copyright" content="Unaty Technologies GmbH Copyright (c) 2018"> <meta name="description" content="Reach, activate and connect your community with Unaty."> <meta property="og:image" content="https://unaty-media.s3.amazonaws.com/organizations/PDkydbno2wA2Wwfzk/public/main/1525262743352"> <meta property="og:image:type" content="image/jpg"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="630"> <meta content="en_US" property="og:locale"> <meta content="website" property="og:type"> <meta content="https://www.unaty.de/" property="og:url"> <meta content="Unaty" property="og:site_name"> <!-- Twitter Card data --> <meta name="twitter:card" content="summary"> <meta name="twitter:site" content="@unatyde"> <meta name="twitter:title" content="Reach, activate and connect your community with Unaty"> <meta name="twitter:description" content="Reach, activate and connect your community with Unaty"> <meta name="twitter:creator" content="@unatyde"> <meta name="twitter:image" content="https://unaty-media.s3.amazonaws.com/organizations/PDkydbno2wA2Wwfzk/public/main/1525262743352"> <meta name="twitter:url" content="https://www.unaty.de/"> <meta name="twitter:domain" content="https://www.unaty.de"> <link rel="apple-touch-icon" sizes="180x180" href="https://unaty-media.s3.amazonaws.com/users/undefined/public/1513333373730"> <link rel="icon" type="image/png" sizes="32x32" href="https://unaty-media.s3.amazonaws.com/users/undefined/public/1513333361779"> <link rel="icon" type="image/png" sizes="16x16" href="https://unaty-media.s3.amazonaws.com/users/undefined/public/1513333346991"> <link rel="shortcut icon" href="https://unaty-media.s3.amazonaws.com/organizations/pGqEDhGidq4GBKqdc/public/main/1512577221910">'