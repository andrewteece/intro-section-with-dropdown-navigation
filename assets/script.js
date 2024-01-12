const features = document.getElementById('features')
const featuresMenu = document.getElementById('features-menu')
const iconFeatures = document.getElementById('icon-features')
const company = document.getElementById('company')
const companyMenu = document.getElementById('company-menu')
const iconCompany = document.getElementById('icon-company')
const iconMobileMenu = document.getElementById('mobile__menu--icon')
const headerNavMenu = document.getElementById('header__nav--menu')
const overlay = document.getElementById('overlay')
const wrapper = document.getElementById('main__wrapper')

features.addEventListener('click', () => {
    featuresMenu.classList.toggle('show-menu')
    iconFeatures.classList.toggle('rotate')
})

company.addEventListener('click', () => {
    companyMenu.classList.toggle('show-menu')
    iconCompany.classList.toggle('rotate')
})

iconMobileMenu.addEventListener('click', () => {
    iconMobileMenu.classList.toggle('icon-close-menu')
    headerNavMenu.classList.toggle('show-mobile-menu')
    overlay.classList.toggle('show-overlay')
})