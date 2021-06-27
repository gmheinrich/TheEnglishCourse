import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faSignInAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faInstagram, faYoutube, faEnvelope, faSignInAlt);
}

export default initFontAwesome;