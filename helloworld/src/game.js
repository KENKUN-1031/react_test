    import React from 'react';

    class Jyanken extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                player: "",
                cpu: "",
                result: "じゃんけんしてね！",
                playerImage: "",
                cpuImage: "",
                playerImage: ""
            };
            this.jyankenSubmit = this.jyankenSubmit.bind(this);
            this.textInput = this.textInput.bind(this);
            this.handsImage = [
                {
                image: require('./images/gu.png')
                },
                {
                image: require('./images/choki.png')
                },
                {
                image: require('./images/pa.png')
                }
            ];          
        }
        //cpuの手を決める関数
        changeCpuHand(){
            const cpuHands = ["グー","チョキ","パー"];
            const randomNum = Math.floor(Math.random() * cpuHands.length);
            const cpuRandom = cpuHands[randomNum];
            this.setState({cpuImage: this.handsImage[randomNum].image});
            return(cpuRandom);
        }
        //プレイヤーの写真を変更する関数
        changePlayerImage(){
            if (this.state.player === "グー"){
                this.setState({playerImage: this.handsImage[0].image});
            }else if (this.state.player === "チョキ"){
                this.setState({playerImage: this.handsImage[1].image});
            }else{
                this.setState({playerImage: this.handsImage[2].image});
            }
        }
        textInput(event){
            //テキストを読み込む→変数に代入
            this.setState({player: event.target.value});
        }
        jyankenSubmit(event){
            const cpuHand = this.changeCpuHand();
            this.changePlayerImage();
            this.setState({ cpu: cpuHand }, () => {
              // 結果の判定
              if ( this.state.player !== "グー" && this.state.player !== "パー" && this.state.player !== "チョキ") {
                this.setState({result: "グー、パー、チョキのどれかを入力してください"});
              } else {
                if (this.state.player === this.state.cpu) {
                  this.setState({result: "playerが" + this.state.player + "でcpuが" + this.state.cpu + "であいこ！"});
                } else if ((this.state.player === "グー" && this.state.cpu === "チョキ") || (this.state.player === "チョキ" && this.state.cpu === "パー") || (this.state.player === "パー" && this.state.cpu === "グー")){
                  this.setState({result: "playerが" + this.state.player + "でcpuが" + this.state.cpu + "でplayerの勝ち!",});
                } else {
                  this.setState({result: "playerが" + this.state.player + "でcpuが" + this.state.cpu + "でcpuの勝ち!"});
                }
              }
            });
            // //↓がないと毎回リロードされちゃう
            event.preventDefault();
        }
        render(){
            return(
                <div className="main">
                    <link rel="stylesheet" href="game.css"/>
                    <form className="form" onSubmit={this.jyankenSubmit}>
                        <input className="textInput" type="text" value={this.state.player} onChange={this.textInput}/>
                        <input className="submitInput" type="submit" value="勝負！"/>
                    </form>
                    <h2 className="result">{this.state.result}</h2>
                    <div className="handsGroup">
                        <div className="playerGroup">
                            <h3>Player</h3>
                            <img src={this.state.playerImage} className="handImage"/>
                        </div>
                        <div className="X">
                            <h3>X</h3>
                        </div>
                        <div className="CPUGroup">
                            <h3>CPU</h3>
                            <img src={this.state.cpuImage} className="handImage"/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default Jyanken;