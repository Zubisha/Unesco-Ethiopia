import React from 'react';
import './Styles/Body.css';

export default function Body(){
    return(
        <div className='body-container'>
         <div className='containerB-1'>
            <div className='containerB-1-1'>
            <div className='textB-1'>
                <h2 id='textB-1-title'>Aksum</h2>
                <p id='textB-1-text'>
        The ruins of the ancient city of Aksum are found close to Ethiopia's northern border.
       They mark the location of the heart of ancient Ethiopia, when the Kingdom of Aksum was
        the most powerful state between the Eastern Roman Empire and Persia. The massive ruins, 
        dating from between the 1st and the 13th century A.D., include monolithic obelisks, giant stelae, 
       royal tombs and the ruins of ancient castles. Long after its political decline in the 10th century,
        Ethiopian emperors continued to be crowned in Aksum.</p>
            </div>
             <div className='imgB-1'>
                 
             </div>
            </div> 
            <div className='containerB-1-2'>
            <img id='imageB-1' src='https://imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_05_t.jpg'alt='img not found'/>
            <img id='imageB-1' src='https://imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_05_t.jpg' alt='img not found'/>
            <img id='imageB-1' src='https://imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_05_t.jpg' alt='img not found'/>
            </div>
           
         </div>
         <div className='containerB-2'>
         <div className='textB-2'>
                <h2 id='textB-2-title'>Fasil Ghebbi, Gondar Region</h2>
                <p id='textB-2-text'>       
Fasil Ghebbi is located in the Amhara National Regional State,
 in North Gondar Administrative Zone of the Federal Democratic Republic of Ethiopia.
 In the 16th and 17th centuries, the fortress-city of Fasil Ghebbi was the residence 
 of the Ethiopian emperor Fasilides and his successors. Surrounded by a 900-m-long wall, 
 the city contains palaces, churches, monasteries and unique public and private buildings 
 marked by Hindu and Arab influences,subsequently transformed by the Baroque style brought
  to Gondar by the Jesuit missionaries.</p>
            </div>
         </div>
         <div className='containerB-3'></div>
        </div>
    )
}