const Footer = () => {
    return (
        <footer class="meta-footer">
            <div class="footer-languages">
                <a href="#">English (UK)</a>
                <a href="#">Tiếng Việt</a>
                <a href="#">中文(台灣)</a>
                <a href="#">日本語</a>
                <a href="#">Français (France)</a>
                <a href="#">Español</a>
                <a href="#">Português (Brasil)</a>
                <a href="#">Deutsch</a>
                <a href="#">Italiano</a>
                <a href="#" class="more">+</a>
            </div>
            <div class="footer-links">
                <a href="#">Sign up</a>
                <a href="#">Log in</a>
                <a href="#">Messenger</a>
                <a href="#">Facebook Lite</a>
                <a href="#">Video</a>
                <a href="#">Meta Pay</a>
                <a href="#">Meta Store</a>
                <a href="#">Meta Quest</a>
                <a href="#">Ray-Ban Meta</a>
                <a href="#">Meta AI</a>
                <a href="#">Instagram</a>
                <a href="#">Threads</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Terms</a>
                <a href="#">Help</a>
            </div>
            <div class="footer-copy">
                Meta © {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer