import './Css/Navbar.css'
const Footer=()=>{
    return(
        <div class="d-flex flex-column h-100">

    <section class="hero text-white py-5 flex-grow-1">
        <div class="container py-4">
            <div class="row">
                <div class="col-lg-6">
                    <h3 class="display-4">We Lend a Helping hand</h3>
                    <p class="fst-italic text-muted">
                    You are not important because of how long you live, you are important because of how effective you live. The measure of life is not its duration, but its donation. Making a donation is the ultimate sign of solidarity.
                         <a class="text-primary" href="https://bootstrapious.com/" target="_blank">HelpingHand</a></p>
                </div>
            </div>
        </div>
    </section>



    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">DONATE</h5>
                    <p class="small text-muted"></p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#"></a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted"></p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
    )
}
export default Footer;
