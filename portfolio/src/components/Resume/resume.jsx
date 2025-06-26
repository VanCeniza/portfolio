import './resume.css';

function Resume() {
    return(
        <section className='container-info'>
            <div className='personal-information'>
                <h1>
                    Personal Information
                </h1>
                
                <div className='left-column'>
                    <h2>
                        Phone:
                        <span className='phone'>+63 9281550132</span>
                    </h2>

                    <h3>
                        Email:
                        <span className='email'>cenizavanbryan22@gmail.com</span>
                    </h3>
                </div>
                
                <div className='right-column'>
                    <h4>
                        Address:
                        <span className='add'>EEC Apartments S-205 Sikatuna Lardizabal St. Brgy. 410 Sampaloc City, Metro Manila, Philippines</span>
                    </h4>

                    <h5>
                        Birthdate:
                        <span className='birthdate'>February 22, 2004</span>
                    </h5>
                </div>
            </div>
     

        </section>
    );
}
export default Resume;