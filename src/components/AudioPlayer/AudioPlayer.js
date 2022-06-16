import React, { Component } from 'react'
import styles from './AudioPlayer.module.scss'
import audioUrl from '../../assets/music/有何不可.mp3'
import coverUrl from '../../assets/images/music_cover.jpg'

export default class AudioPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            paused: true,             // 音频是否暂停
            currentTime: 0,           // 已播放时间（未转换）
            playedTime: "00:00",      // 已播放时间 
            duration: 0,              // 音乐总时长（未转换）
            totalTime: "00:00",
            lyricPosition: '0',
            lyricArray: [
                {
                  t: 0,
                  c: '有何不可'
                },
                {
                    t: 1,
                    c: "作词：许嵩 作曲：许嵩"
                },
                {
                    t: 2,
                    c: '演唱：许嵩'
                },
                {
                    t: 21,
                    c: '天空好想下雨'
                },
                {
                    t: 25,
                    c: '我好想住你隔壁'
                },
                {
                    t: 27,
                    c: '傻站在你家楼下'
                },
                {
                    t: 29,
                    c: '抬起头 数乌云'
                },
                {
                    t: 31,
                    c: '如果场景里出现一架钢琴'
                }, 
                {
                    t: 33,
                    c: '我会唱歌给你听'
                }, 
                {
                    t: 36,
                    c: '哪怕好多盆水往下淋'
                }, 
                {
                    t: 42,
                    c: '夏天快要过去'
                }, 
                {
                    t: 44,
                    c: '请你少买冰淇淋'
                }, 
                { 
                    t: 46,
                    c: '天凉就别穿短裙'
                },
                { 
                    t: 48,
                    c: '别再那么淘气'
                },
                { 
                    t: 51,
                    c: '如果有时不那么开心'
                },
                { 
                    t: 52,
                    c: '我愿意将格洛米借给你'
                },
                { 
                    t: 54,
                    c: '你其实明白我心意'
                },
                { 
                    t: 59,
                    c: '为你唱这首歌 没有什么风格'
                },
                { 
                    t: 63,
                    c: '它仅仅代表着 我想给你快乐'
                },
                {
                    t: 68,
                    c: '为你解冻冰河 为你做一只扑火的飞蛾'
                },
                {
                    t: 74,
                    c: '没有什么事情是不值得'
                },
                {
                    t: 78,
                    c: '为你唱这首歌 没有什么风格'
                },
                {
                    t: 82,
                    c: '它仅仅代表着 我希望你快乐'
                },
                {
                    t: 87,
                    c: '为你辗转反侧 为你放弃世界有何不可'
                },
                {
                    t: 93,
                    c: '夏末秋凉里带一点温热 有换季的颜色'
                },
                {
                    t: 117,
                    c: '天空好想下雨'
                },
                {
                    t: 119,
                    c: '我好想住你隔壁'
                },
                {
                    t: 122,
                    c: '傻站在你家楼下'
                },
                {
                    t: 125,
                    c: '抬起头 数乌云'
                },
                {
                    t: 127,
                    c: '如果场景里出现一架钢琴'
                },
                {
                    t: 128,
                    c: '我会唱歌给你听'
                },
                {
                    t: 132,
                    c: '哪怕好多盆水往下淋'
                },
                {
                    t: 135,
                    c: '夏天快要过去'
                },
                {
                    t: 137,
                    c: '请你少买冰淇淋'
                },
                {
                    t: 139,
                    c: '天凉就别穿短裙'
                },
                {
                    t: 141,
                    c: '别再那么淘气'
                },
                {
                    t: 145,
                    c: '如果有时不那么开心'
                },
                {
                    t: 147,
                    c: '我愿意将格洛米借给你'
                },
                {
                    t: 150,
                    c: '你其实明白我心意'
                },
                {
                    t: 154,
                    c: '为你唱这首歌 没有什么风格'
                },
                {
                    t: 157,
                    c: '它仅仅代表着 我想给你快乐'
                },
                {
                    t: 163,
                    c: '为你解冻冰河 为你做一只扑火的飞蛾'
                },
                {
                    t: 168,
                    c: '没有什么事情是不值得'
                },
                {
                    t: 171,
                    c: '为你唱这首歌 没有什么风格'
                },
                {
                    t: 177,
                    c: '它仅仅代表着 我希望你快乐'
                },
                {
                    t: 182,
                    c: '为你辗转反侧 为你放弃世界有何不可'
                },
                {
                    t: 188,
                    c: '夏末秋凉里带一点温热'
                },
                {
                    t: 200,
                    c: '为你解冻冰河 为你做一只扑火的飞蛾'
                },
                {
                    t: 207,
                    c: '没有什么事情是不值得'
                },
                {
                    t: 210,
                    c: '为你唱这首歌 没有什么风格'
                },
                {
                    t: 215,
                    c: '它仅仅代表着 我希望你快乐'
                },
                {
                    t: 220,
                    c: '为你辗转反侧 为你放弃世界有何不可'
                },
                {
                    t: 225,
                    c: '夏末秋凉里带一点温热 有换季的颜色'
                }
            ],
        }
    }

    componentDidMount () {

    }

    // 播放/暂停
    playControl = () => {
        if(this.audio.paused){
            this.audio.play()
        }else {
            this.audio.pause()
        }
        this.setState({
            paused: this.audio.paused
        })
    }

    // 音量调节
    adjustVolume = (event) => {
        let audio = this.audio;
        audio.volume = event.target.value
    }

    // canPlay监听
    canPlay = () => {
        let duration = this.audio.duration;
        let duration_m = Math.floor(duration/60);
        let duration_s = Math.floor(duration%60);

        duration_m = duration_m >= 10 ? duration_m : "0"+duration_m;
        duration_s = duration_s >= 10 ? duration_s : "0"+duration_s;

        this.setState({
            duration,
            totalTime: duration_m + ":" + duration_s
        })
    }

    // timeUpdate监听，更新播放时长与进度条
    timeUpdate = () => {
        let currentTime = this.audio.currentTime;
        let currentTime_m = Math.floor(currentTime/60);
        let currentTime_s = Math.floor(currentTime%60);

        currentTime_m = currentTime_m>=10?currentTime_m:"0"+ currentTime_m;
        currentTime_s = currentTime_s>=10?currentTime_s:"0"+ currentTime_s;

        const lyricHeight = this.lyricDom.clientHeight;
        
        let { currentLine, lyricPosition } = this.state;
        this.state.lyricArray.forEach((lyricItem, lyricIndex) => {
            let currentSecond = Math.floor(currentTime);
            if(currentSecond == lyricItem.t) {
                currentLine = lyricIndex;
                if(currentLine*lyricHeight>=150) {
                    lyricPosition = -(currentLine*lyricHeight - 150)+'px';
                }
            }
        });

        this.setState({
            currentLine,
            lyricPosition,
            currentTime,
            playedTime: currentTime_m + ":" + currentTime_s
        })
    }

    // 结束时
    onEnd = () => {
        this.setState({
            currentLine: 0,
            lyricPosition : '0'
        })
    }

    render() {
        let { paused, playedTime, totalTime, currentTime, duration, lyricPosition, lyricArray, currentLine } = this.state;
        return (
                <div className={styles.music_container}>
                    <div className={styles.header}>音乐播放器</div>
                    <div className={styles.content}>
                        <div className={`${styles.disc}  ${styles.flex_center}`}>
                            <div className={`${styles.disc_outer} ${styles.flex_center}`}>
                                <div className={styles.disc_inner}>
                                    <img src={coverUrl} className={`${styles.cover_img} ${!paused?styles.cover_img_rotate:''}`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.lyric} style={{marginTop: lyricPosition}}>
                            {
                                lyricArray.map((lyric, lyricIndex)=>{
                                    return (
                                        <p 
                                          className={`${styles.lyric_text} ${currentLine==lyricIndex?styles.lyric_text_current:''}`}
                                          ref={(lyricDom) => { this.lyricDom = lyricDom  }}
                                        >{lyric.c}</p>
                                    )

                                })
                            }
                        </div>
                    </div>
                    <div className={styles.footer}>

                        {/* 歌曲信息 */}
                        <div className={styles.music_info}>
                            {/* 音乐名 */}
                            <div>
                                <span className={styles.songName}>有何不可</span>
                                <span>---</span>
                                <span className={styles.songSinger}>许嵩</span>
                            </div>

                            {/* 音乐时长 */}
                            <div className={styles.music_duration}>
                                <span>{playedTime}</span>/
                                <span>{totalTime}</span>
                            </div>
                        </div>
                        

                        {/* 播放进度 */}
                        <div className={styles.progress}>
                            <div className={styles.currentPro} style={{width: currentTime*100/duration+"%"}}></div>
                        </div>
                        
                        {/* 播放控制 */}
                        <div className={`${styles.controls} ${styles.flex_center}`}>
                            <span className={styles.prev + " iconfont icon-shangyishou"} title="previous"></span>
                            <span className={`${styles.switch} iconfont ${paused?"icon-bofang":"icon-zanting"}`} onClick={this.playControl}></span>
                            <span className={styles.next + " iconfont icon-xiayishou"} title="next"></span>
                            
                            {/* 音量增减 */}
                            <div className={styles.volume}>
                                <span className={`${styles.volume_icon} iconfont icon-danseshixintubiao-`}></span>
                                <input type="range" className={styles.volume_range} max="1" min="0" step="0.1" onChange={this.adjustVolume}/>
                            </div>
                        </div>
                    </div>
                    <audio
                        id={styles.music1}
                        loop={true}
                        src={audioUrl}
                        ref={(audio) => { this.audio = audio  }}
                        onTimeUpdate={this.timeUpdate}
                        onCanPlay={this.canPlay}
                        onEnded={this.onEnd}>
                        Your browser does not support the<code>audio</code> element.
                    </audio>
                </div>
        )
    }
}
