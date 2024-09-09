import { useState } from 'react'
import Input from './input'


export default function UserInput({dataI, inputF}) {

    



    return(
        <div id="user-input">
            <div className="input-group">

                <Input inputFi={inputF} dValue={dataI.initialInvestment} name={'initialInvestment'} label={'Initial invesment'} />
                <Input inputFi={inputF} dValue={dataI.annualInvestment} name={'annualInvestment'} label={'Annual invesment'} />
            
                
            </div>
    
            <div className="input-group">

                <Input inputFi={inputF} dValue={dataI.expectedReturn} name={'expectedReturn'} label={'Expected return'} />
                <Input inputFi={inputF} dValue={dataI.duration} name={'duration'} label={'Duration'} />
                
            </div>
            
        </div>
    )

}