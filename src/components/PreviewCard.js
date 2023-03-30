import React, { useState } from 'react';

const PreviewCard = ({ item }) => {
    const [border, setBorder] = useState({
        Sedan: {},
        Suvs: {},
        Luxury: {}
    })

    const borderStyle = (sty) => {
        console.log('working ' + sty);
        /*setBorder({
            Sedan: {
                border: '2px solid #fff',
                backgroundColor: 'transparent',
                cursor:'grabbing',
                color: '#fff'
            }
        });*/

        if(sty === 'Sedan'){
            setBorder({ Sedan: {
                border: '2px solid #fff', backgroundColor: 'transparent',
                cursor:'grabbing', color: '#fff'
                },
                Suvs: {},
                Luxury: {}
            });
        }

        if(sty === 'Suvs'){
            setBorder({ Sedan: {},
                Suvs: {border: '2px solid #fff', backgroundColor: 'transparent',
                cursor:'grabbing', color: '#fff'},
                Luxury: {}
            });
        }

        if(sty === 'Luxury'){
            setBorder({ Sedan: {},
                Suvs: {},
                Luxury: {border: '2px solid #fff', backgroundColor: 'transparent',
                cursor:'grabbing', color: '#fff'}
            });
        }

        /*sty === 'Sedan' ? setBorder({ Sedan: {
                border: '2px solid #fff', backgroundColor: 'transparent',
                cursor:'grabbing', color: '#fff'
            }
        }): setBorder({});
        */
    }
    
    const borderStyleOff = () =>{
        setBorder({
        })
    }
    let itemList = item.map((value) =>
        (
            <div key={value.id} id={value.id} className={value.carName + ' div-pad'}>
                <ul>
                    <li><img  src={value.carLogo} alt='value.carName' /></li>
                    <li><h3>{value.carName.toUpperCase()}</h3></li>
                    <li><p>{value.carDescription}</p></li>
                    <li>
                        <button id={value.keepName} onMouseEnter={()=>borderStyle(value.carName)}  onMouseLeave={()=>borderStyleOff(value.carName)} className={ 'but-'+ value.carName } style={  border[value.carName] }>Learn More</button>
                    </li>
                </ul>
            </div>
        ) 
    )

  return ( itemList )
}

export default PreviewCard;
