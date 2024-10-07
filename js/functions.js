        const riviNappi = document.getElementById('riviNappi');
        const jokeriRivit = document.getElementById('jokeriRiviLaskuri');
        const riviLaskuri = document.getElementById('riviLaskuri');

        let rivit = 0; 

        
        riviNappi.addEventListener('click', () => {
            JokeriRivi();
        });

        
        function JokeriRivi() {
            const uusiRivi = document.createElement('div'); 
            uusiRivi.classList.add('row'); 

            
            for (let i = 0; i < 7; i++) {
                const uusiLaatikko = document.createElement('div');
                uusiLaatikko.classList.add('box'); 
                
                uusiLaatikko.textContent = Math.floor(Math.random() * 10);
                
                uusiRivi.appendChild(uusiLaatikko);
            }

            
            jokeriRivit.appendChild(uusiRivi);

            
            rivit++;
            riviLaskuri.textContent = rivit;
        }
