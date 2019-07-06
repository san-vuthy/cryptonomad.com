import React, { Component } from 'react';
import NewNav from "./NavBar1-News";


class Template extends Component {
    render() {
        return (
            <React.Fragment>
                <NewNav/>
                
                <div className="container">
                    <div id="template-card" className="col-md-8">
                        <div id="template-body" className="card-body">
                            <a href="#"><h1 className="card-title">BCH May Have Sustained Double Spend</h1></a>
                        </div>
                        <a href="#"><img src="./img/1.jpg" alt="Photo" width={"100%"}/></a>
                        <div id="pa" className="card-body">
                            <p className="card-text">Bitcoin Cash (BCH) appears to have experienced
                             a two-block chain reorganization resulting in a 3,392 BCH double spend.
                             The claim was made in a report released by the research arm of cryptocurrency
                             derivatives exchange BitMex on May 24. Per the report, the recent BCH hard fork
                             experienced three interrelated issues.</p>
                             <p className="card-text">Firstly, an apparent bug evidently exploited
                             by an attacker right after the hard fork. The attacker was able to “broadcast
                             transactions which met the mempool validity conditions but failed the consensus checks.
                             ” Miners attempting to produce blocks with said transactions were not able to,
                             instead producing empty blocks. The empty blocks reportedly resulted in concern
                             among miners who “may have tried to mine on the original non-hard fork chain,
                             causing a consensus chainsplit.</p>
                             <p className="card-text">”The third interrelated problem was that the
                             consensus chainsplit reportedly prevented a system meant to recover funds accidentally
                             sent to SegWit addresses from functioning. According to BitMex Research,
                             “[t]his failure may have resulted in a deliberate and coordinated 2 block chain re-organisation.
                             ” The report claims:</p>
                             <p className="card-text">“Based on our calculations, around 3,392 BCH may have been successfully
                             double spent in an orchestrated transaction reversal.”</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>    
        )
    }
}

export default Template;
