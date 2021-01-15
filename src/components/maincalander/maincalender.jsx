import React from 'react';
import { Inject, ScheduleComponent, Day, Week, Month } from '@syncfusion/ej2-react-schedule';
import '../maincalander/maincalaender.css';

function Maincal() {
    return (
        <div class="root-cal">
            <div className="participent">
                <ul>
                    <li className="participent-li">My Self</li>
                    <li className="participent-li">participent 1</li>
                    <li className="participent-li">participent 2</li>
                    <li className="participent-li">participent 3</li>
                    <li className="participent-li">participent 4</li>
                    <li className="participent-li">participent 5</li>
                    <li className="participent-li">participent 6</li>
                    <li className="participent-li">participent 7</li>
                    <li className="participent-li">participent 8</li>
                    <li className="participent-li">participent 9</li>
                    <li className="participent-li">participent 10</li>
                    <li className="participent-li">participent 11</li>
                </ul>
            </div>

            <div>
                <ScheduleComponent className="main-cla">
                    <Inject services={[Day, Week, Month]} />
                </ScheduleComponent>
            </div>        
        </div>
       
    )
}

export default Maincal;