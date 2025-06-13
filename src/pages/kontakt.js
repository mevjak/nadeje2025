import * as React from "react"
import Layout from '../components/layout'

const ContactPage = () =>  {
    return (
        <Layout pageTitle="Kontakt">
        <div>
            <h1><span>Kontakt</span></h1>

            <div className="row">
                <div className="col-md-6" >
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.6350723034693!2d15.046234877521117!3d50.763799964751364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709369a4f498239%3A0xa48786f56552597!2zMTlhLCBNYXRvdcWhb3ZhIDU2LzE5QSwgNDYwIDA3IExpYmVyZWMtSmXFmcOhYiwgxIxlc2tv!5e0!3m2!1scs!2sus!4v1749806055197!5m2!1scs!2sus"
                                width="500" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="address">
                        <h2>Adresa</h2>
                        <address>
                            <strong>Spolek Naděje 2011</strong><br/>
                            Matoušova 56/19a, Liberec III-Jeřáb, 46007 Liberec<br/>
                            Česká republika<br/>
                            <abbr title="Identifikační číslo organizace">IČ:</abbr> 01567730
                        </address>

                        <h2>Zástupci spolku</h2>
                        <address>
                            <strong>Martina Fikarová</strong><br/>
                            <a href="mailto:#">fikama@centrum.cz</a>
                        </address>
                        <address>
                            <strong>Miroslav Evják</strong><br/>
                            <a href="mailto:#">miroslav.evjak@gmail.com</a>
                        </address>
                        <address>
                            <strong>Věra Engeová</strong><br/>
                            <a href="mailto:#">vera.engeova@seznam.cz</a>
                        </address>
                    </div>
                </div>
            </div>
            <br/>

            <div className="row">
                <div className="col-md-12">
                    <div className="bank-info border border-2 rounded">
                        <h4 className="text-center">Číslo účtu pro sponzory:</h4>
                        <p className="account">670100-2208920235/6210</p>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ContactPage