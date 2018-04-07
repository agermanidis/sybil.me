import React, { Component } from 'react';
import styled from 'styled-components';

const AppsImageContainer = styled.svg`
  right: -100px;
  position: relative;
  height: 87vh;
`;

class AppsImage extends Component {
    nicknames = [
        "Alberto Caiero",
        "plubius",
        "Dr. Ralph",
        "A.B."
    ];

    avatars = [
        "https://www.thefamouspeople.com/profiles/images/fernando-pessoa-2.jpg",
        "http://www.chinainperspective.com/EditorData/Photo/2009/Sep/9122009madison.jpg",
        "http://www.registryofpseudonyms.com/images/francois_marie_arouet.jpg",
        "http://www.registryofpseudonyms.com/images/daniel_defoe.jpg"
    ];

    state = {
        currentIndex: 0
    }

    componentDidMount () {
        this.animate();
    }

    animate () {
        const newIndex = (this.state.currentIndex + 1) % this.nicknames.length;
        if (this._el) {
            for (const el of this._el.querySelectorAll('.avatar-placeholder')) {
                el.setAttribute('xlink:href', this.avatars[newIndex]);
            }
        }
        this.setState({currentIndex: newIndex});
        setTimeout(this.animate.bind(this), 1000);
    }

    render () {

        return <div
            ref={(el) => {
                this._el = el
            }}>
            <AppsImageContainer width="716px" height="802px" viewBox="0 0 716 802" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M6,0 L903.955357,0 C907.269066,-6.24151703e-14 909.955357,2.6862915 909.955357,6 L909.955357,605 C909.955357,608.313708 907.269066,611 903.955357,611 L217.888393,611 L6,611 C2.6862915,611 1.29399067e-15,608.313708 8.8817842e-16,605 L0,6 C-4.05812251e-16,2.6862915 2.6862915,6.08718376e-16 6,0 Z" id="path-1"></path>
        <filter x="-5.8%" y="-6.1%" width="111.5%" height="117.2%" filterUnits="objectBoundingBox" id="filter-3">
            <feOffset dx="0" dy="15" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.197172619   0 0 0 0 0.197172619   0 0 0 0 0.197172619  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <ellipse id="path-4" cx="30.8883929" cy="30.8838798" rx="30.8883929" ry="30.8838798"></ellipse>
        <rect id="path-6" x="-62.6116071" y="29.2144809" width="975.071429" height="74.7855191"></rect>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-7">
            <stop stop-color="#F7F6F7" offset="0%"></stop>
            <stop stop-color="#D7D5D7" offset="100%"></stop>
        </linearGradient>
        <path d="M6,0 L903.955357,0 C907.269066,-6.24151703e-14 909.955357,2.6862915 909.955357,6 L909.955357,37 L0,37 L8.8817842e-16,6 C4.82366169e-16,2.6862915 2.6862915,6.08718376e-16 6,0 Z" id="path-8"></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-9">
            <stop stop-color="#FEFEFE" offset="0%"></stop>
            <stop stop-color="#F2F1F2" offset="100%"></stop>
        </linearGradient>
        <rect id="path-10" x="1.13686838e-13" y="0" width="430" height="22" rx="4"></rect>
        <filter x="-0.2%" y="-3.4%" width="100.3%" height="109.1%" filterUnits="objectBoundingBox" id="filter-11">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0.5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.650980392   0 0 0 0 0.643137255   0 0 0 0 0.650980392  0 0 0 1 0" type="matrix" in="shadowOffsetOuter1"></feColorMatrix>
        </filter>
        <circle id="path-12" cx="61.9342516" cy="19" r="6"></circle>
        <circle id="path-13" cx="41.9342516" cy="19" r="6"></circle>
        <circle id="path-14" cx="21.9342516" cy="19" r="6"></circle>
        <ellipse id="path-15" cx="13.7745536" cy="13.772541" rx="13.7745536" ry="13.772541"></ellipse>
        <rect id="path-17" x="0" y="0" width="30.8883929" height="30.8838798"></rect>
        <ellipse id="path-18" cx="21.7053571" cy="21.7021858" rx="21.7053571" ry="21.7021858"></ellipse>
        <rect id="path-20" x="0" y="0" width="49.277027" height="49.2698272"></rect>
        <circle id="path-21" cx="13.5" cy="13.5" r="13.5"></circle>
        <rect id="path-23" x="0" y="0" width="29.5135135" height="29.5690945"></rect>
        <circle id="path-24" cx="13.5" cy="13.5" r="13.5"></circle>
        <rect id="path-26" x="0" y="0" width="29.5135135" height="29.5690945"></rect>
        <ellipse id="path-27" cx="13.7745536" cy="13.772541" rx="13.7745536" ry="13.772541"></ellipse>
        <ellipse id="path-29" cx="13.7745536" cy="13.772541" rx="13.7745536" ry="13.772541"></ellipse>
        <path d="M6,0 L811,0 C814.313708,-6.08718376e-16 817,2.6862915 817,6 L817,543 C817,546.313708 814.313708,549 811,549 L195.630275,549 L6,549 C2.6862915,549 -4.82366169e-16,546.313708 -8.8817842e-16,543 L0,6 C-4.05812251e-16,2.6862915 2.6862915,6.08718376e-16 6,0 Z" id="path-31"></path>
        <filter x="-6.4%" y="-6.8%" width="112.9%" height="119.1%" filterUnits="objectBoundingBox" id="filter-33">
            <feOffset dx="0" dy="15" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.197172619   0 0 0 0 0.197172619   0 0 0 0 0.197172619  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <ellipse id="path-34" cx="27.7330275" cy="27.75" rx="27.7330275" ry="27.75"></ellipse>
        <path d="M6,0 L811,0 C814.313708,-6.08718376e-16 817,2.6862915 817,6 L817,37 L0,37 L0,6 C-4.05812251e-16,2.6862915 2.6862915,6.08718376e-16 6,0 Z" id="path-36"></path>
        <rect id="path-37" x="0" y="0" width="430" height="22" rx="4"></rect>
        <filter x="-0.2%" y="-3.4%" width="100.3%" height="109.1%" filterUnits="objectBoundingBox" id="filter-38">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0.5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.650980392   0 0 0 0 0.643137255   0 0 0 0 0.650980392  0 0 0 1 0" type="matrix" in="shadowOffsetOuter1"></feColorMatrix>
        </filter>
        <circle id="path-39" cx="61.9342516" cy="19" r="6"></circle>
        <circle id="path-40" cx="41.9342516" cy="19" r="6"></circle>
        <circle id="path-41" cx="21.9342516" cy="19" r="6"></circle>
        <ellipse id="path-42" cx="28" cy="27.5" rx="28" ry="27.5"></ellipse>
        <circle id="path-44" cx="12.5" cy="12.5" r="12.5"></circle>
        <ellipse id="path-46" cx="19.5" cy="19.5367232" rx="19.5" ry="19.5367232"></ellipse>
        <rect id="path-48" x="0" y="0" width="36" height="37"></rect>
        <path d="M0,78.5 L600.5,78.5" id="path-49"></path>
        <filter x="-1.2%" y="-200.0%" width="102.3%" height="566.7%" filterUnits="objectBoundingBox" id="filter-50">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
            <feOffset dx="0" dy="1" in="shadowInner" result="shadowInner"></feOffset>
            <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Colors-Copy" transform="translate(-724.000000, -126.000000)">
            <g id="apps" transform="translate(754.000000, 141.000000)">
                <g id="Group-6">
                    <g id="MessageBoard">
                        <g id="Browser">
                            <g id="Rectangle-3-Copy-2">
                                <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1"></use>
                                </mask>
                                <g id="Mask">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlinkHref="#path-1"></use>
                                    <use fill="#DCDBD5" fill-rule="evenodd" xlinkHref="#path-1"></use>
                                </g>
                                <g id="Group-Copy-4" mask="url(#mask-2)">
                                    <g transform="translate(253.156250, 699.265027)">
                                        <mask id="mask-5" fill="white">
                                            <use xlinkHref="#path-4"></use>
                                        </mask>
                                        <use id="Mask" stroke="none" fill="#D8D8D8" fill-rule="evenodd" xlinkHref="#path-4"></use>
                                        <image id="Group-Copy-2" stroke="none" fill="none" mask="url(#mask-5)" x="-1.69622803" y="-4.26502732" width="65" height="63" xlinkHref="https://ipfs.io/ipfs/QmayQXw5dy2Y6yt5SekcDN15tsBbaey651cwPaqoH5fBfF"></image>
                                    </g>
                                </g>
                                <rect stroke="#E9EAED" mask="url(#mask-2)" x="132.401786" y="543.054645" width="554.991071" height="117.527322" rx="12"></rect>
                                <g id="Rectangle-8" mask="url(#mask-2)">
                                    <use fill="#4C4A4A" fill-rule="evenodd" xlinkHref="#path-6"></use>
                                    <rect stroke="#979797" stroke-width="1" x="-62.1116071" y="29.7144809" width="974.071429" height="73.7855191"></rect>
                                </g>
                            </g>
                            <g id="Menu">
                                <g id="Address-Bar-BG">
                                    <use fill="url(#linearGradient-7)" fill-rule="evenodd" xlinkHref="#path-8"></use>
                                    <path stroke="#C1C1C1" stroke-width="0.5" d="M0.25,36.75 L909.705357,36.75 L909.705357,6 C909.705357,2.82436269 907.130994,0.25 903.955357,0.25 L6,0.25 C2.82436269,0.25 0.25,2.82436269 0.25,6 L0.25,36.75 Z"></path>
                                </g>
                                <g id="Address-Bar" transform="translate(239.977679, 7.000000)">
                                    <g id="Address-Bar-BG">
                                        <use fill="black" fill-opacity="1" filter="url(#filter-11)" xlinkHref="#path-10"></use>
                                        <use fill="url(#linearGradient-9)" fill-rule="evenodd" xlinkHref="#path-10"></use>
                                        <rect stroke="#D2D0D2" stroke-width="0.5" x="-0.25" y="-0.25" width="430.5" height="22.5" rx="4"></rect>
                                    </g>
                                    <text id="ipfs:QmPXME1oRtoT627" font-family="Lars-Regular, Lars" font-size="13" font-weight="normal" fill="#0D0B00">
                                        <tspan x="139.646" y="15">ipfs:QmPXME1oRtoT627YKaDPDQ…</tspan>
                                    </text>
                                    <path d="M420.637433,7.06168307 C419.524058,6.03818307 418.039933,5.41205807 416.412058,5.41205807 C412.965808,5.41205807 410.162058,8.21580807 410.162058,11.6620581 C410.162058,15.1083081 412.965808,17.9120581 416.412058,17.9120581 C418.132433,17.9120581 419.692433,17.2133081 420.823683,16.0848081 L419.586808,14.8479331 C418.772433,15.6594331 417.649808,16.1620581 416.412058,16.1620581 C413.930683,16.1620581 411.912058,14.1434331 411.912058,11.6620581 C411.912058,9.18068307 413.930683,7.16205807 416.412058,7.16205807 C417.557558,7.16205807 418.603683,7.59293307 419.398933,8.30018307 L417.912058,9.78705807 L420.501183,9.78705807 L422.162058,9.78705807 L422.162058,9.21380807 L422.162058,5.53705807 L420.637433,7.06168307 Z" id="Reload-Icon" fill="#999999" fill-rule="nonzero" transform="translate(416.162058, 11.662058) rotate(-45.000000) translate(-416.162058, -11.662058) "></path>
                                </g>
                                <g id="Fullscreen-Icon">
                                    <use fill="#909095" fill-rule="evenodd" xlinkHref="#path-12"></use>
                                    <circle stroke="#6E6E71" stroke-width="0.5" cx="61.9342516" cy="19" r="5.75"></circle>
                                </g>
                                <g id="Hide-Icon">
                                    <use fill="#909095" fill-rule="evenodd" xlinkHref="#path-13"></use>
                                    <circle stroke="#6E6E71" stroke-width="0.5" cx="41.9342516" cy="19" r="5.75"></circle>
                                </g>
                                <g id="Close-Icon">
                                    <use fill="#909095" fill-rule="evenodd" xlinkHref="#path-14"></use>
                                    <circle stroke="#6E6E71" stroke-width="0.5" cx="21.9342516" cy="19" r="5.75"></circle>
                                </g>
                            </g>
                        </g>
                        <text id="You:" font-family="AvenirNext-DemiBold, Avenir Next" font-size="20" font-weight="500" fill="#000000">
                            <tspan x="275.491071" y="242.030055">You:</tspan>
                            <tspan x="275.491071" y="269.030055"></tspan>
                        </text>
                        <text id="You:" font-family="AvenirNext-DemiBold, Avenir Next" font-size="20" font-weight="500" fill="#000000">
                            <tspan x="275.491071" y="593.438525">You:</tspan>
                            <tspan x="275.491071" y="620.438525"></tspan>
                        </text>
                        <text id="Just-found-sybil.me." font-family="AvenirNext-Regular, Avenir Next" font-size="17" font-weight="normal" fill="#000000">
                            <tspan x="275.491071" y="272.418033">Just found sybil.me. Finnaly I can change my</tspan>
                            <tspan x="275.491071" y="295.418033">identity on the blockchain. I dont know what else</tspan>
                            <tspan x="275.491071" y="318.418033">should I add here, I’m just adding fake text</tspan>
                            <tspan x="275.491071" y="341.418033">to make it prettier. </tspan>
                        </text>
                        <g id="Group-Copy-7" transform="translate(28.000000, 543.000000)">
                            <mask id="mask-16" fill="white">
                                <use xlinkHref="#path-15"></use>
                            </mask>
                            <use id="Mask" fill="#D8D8D8" xlinkHref="#path-15"></use>
                            <g id="Group-Copy-2" mask="url(#mask-16)">
                                <g transform="translate(-2.504464, 0.000000)">
                                    <g id="Rectangle-2" fill="none">
                                        <use fill="#202020" fill-rule="evenodd" xlinkHref="#path-17"></use>
                                        <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="29.8883929" height="29.8838798"></rect>
                                    </g>
                                    <rect id="Rectangle-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="22.5518978" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy-3" fill="#FFFFFF" fill-rule="evenodd" x="15.2219778" y="22.3297116" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy" fill="#B7B7B7" fill-rule="evenodd" x="7.55543422" y="14.9975675" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy-2" fill="#737373" fill-rule="evenodd" x="0" y="15.1086606" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy-4" fill="#FFFFFF" fill-rule="evenodd" x="14.9997591" y="7.55433031" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy-5" fill="#FF7A7A" fill-rule="evenodd" x="7.55543422" y="7.55433031" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy-6" fill="#6E6E6E" fill-rule="evenodd" x="22.777412" y="22.2186185" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy-7" fill="#9013FE" fill-rule="evenodd" x="7.55543422" y="0" width="7.55543422" height="7.55433031"></rect>
                                    <rect id="Rectangle-2-Copy-8" fill="#E3E3E3" fill-rule="evenodd" x="22.777412" y="0" width="7.55543422" height="7.55433031"></rect>
                                </g>
                            </g>
                        </g>
                        <g id="Group" transform="translate(200.357143, 379.788251)">
                            <text id="That-was-brutal.-You" font-family="AvenirNext-Regular, Avenir Next" font-size="14" font-weight="normal" fill="#000000">
                                <tspan x="95.1696429" y="64.0819672">That was brutal. You have wrongly terminated my </tspan>
                                <tspan x="95.1696429" y="83.0819672">account. My wife and I have NEVER used the card </tspan>
                                <tspan x="95.1696429" y="102.081967">for anything other than regular admission. In fact </tspan>
                                <tspan x="95.1696429" y="121.081967">we nearly always go to a matinee. I also have </tspan>
                                <tspan x="95.1696429" y="140.081967">never been without my wife and her account was </tspan>
                                <tspan x="95.1696429" y="159.081967">not cancelled! </tspan>
                                <tspan x="95.1696429" y="178.081967"></tspan>
                            </text>
                            <g id="Group-Copy-3" transform="translate(24.209821, 20.867486)">
                                <mask id="mask-19" fill="white">
                                    <use xlinkHref="#path-18"></use>
                                </mask>
                                <use id="Mask" fill="#D8D8D8" xlinkHref="#path-18"></use>
                                <g id="Group-Copy-2" mask="url(#mask-19)">
                                    <g transform="translate(-3.519788, 0.000000)">
                                        <g id="Rectangle-2" fill="none">
                                            <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-20"></use>
                                            <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="48.277027" height="48.2698272"></rect>
                                        </g>
                                        <rect id="Rectangle-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="35.9776076" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-3" fill="#FF7A7A" fill-rule="evenodd" x="24.2840025" y="35.6231484" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy" fill="#D8CE00" fill-rule="evenodd" x="12.0533735" y="23.9259952" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="24.1032248" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-4" fill="#ADADAD" fill-rule="evenodd" x="23.9294915" y="12.0516124" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-4" fill="#FFFFFF" fill-rule="evenodd" x="35.662117" y="12.0516124" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-5" fill="#FFFFFF" fill-rule="evenodd" x="12.0533735" y="12.0516124" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-6" fill="#6E6E6E" fill-rule="evenodd" x="36.337376" y="35.4459189" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-7" fill="#C3C3C3" fill-rule="evenodd" x="12.0533735" y="0" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-8" fill="#7D7D7D" fill-rule="evenodd" x="35.7845077" y="0" width="12.0533735" height="12.0516124"></rect>
                                        <rect id="Rectangle-2-Copy-9" fill="#3B3B3B" fill-rule="evenodd" x="35.7845077" y="24.048368" width="12.0533735" height="12.0516124"></rect>
                                    </g>
                                </g>
                            </g>
                            <rect id="Rectangle-3-Copy" stroke="#E9EAED" x="0.5" y="0.5" width="486.535714" height="146.741803" rx="12"></rect>
                        </g>
                        <rect id="Rectangle-4" fill="#FFFFFF" x="90" y="129" width="490.875" height="92"></rect>
                        <rect id="Rectangle-4-Copy" fill="#FFFFFF" x="90" y="255" width="490.875" height="92"></rect>
                        <rect id="Rectangle-4-Copy-2" fill="#FFFFFF" x="90" y="397" width="490.875" height="92"></rect>
                        <rect id="Rectangle-4-Copy-3" fill="#FFFFFF" x="90" y="543" width="490.875" height="30.8838798"></rect>
                        <text class="nickname-label"  alignment-baseline="middle" font-family="AvenirNext-Regular, Avenir Next" font-size="8" font-weight="normal" fill="#000000">
                            <tspan x="15" y="170">victor_eremita</tspan>
                        </text>
                        <text id="cool_stranger" font-family="AvenirNext-Regular, Avenir Next" font-size="8" font-weight="normal" fill="#000000">
                            <tspan x="16.452" y="298">cool_stranger</tspan>
                        </text>
                        <text id="P2PMessageboard" font-family="Arial" font-size="14" font-weight="normal" fill="#a2a2a2">
                            <tspan x="77" y="77">P2P–MessageBoard</tspan>
                        </text>
                        <text id="cool_stranger" font-family="AvenirNext-Regular, Avenir Next" font-size="8" font-weight="normal" fill="#000000">
                            <tspan x="16.452" y="440">cool_stranger</tspan>
                        </text>
                        <text class="nickname-label" alignment-baseline="middle" font-family="AvenirNext-Regular, Avenir Next" font-size="8" font-weight="normal" fill="#000000">
                            <tspan x="15.516" y="585">victor_eremita</tspan>
                        </text>
                        <g id="Group-Copy-3" transform="translate(28.000000, 400.000000)">
                            <mask id="mask-22" fill="white">
                                <use xlinkHref="#path-21"></use>
                            </mask>
                            <use id="Mask" fill="#D8D8D8" xlinkHref="#path-21"></use>
                            <g id="Group-Copy-2" mask="url(#mask-22)">
                                <g transform="translate(-2.000000, 0.000000)">
                                    <g id="Rectangle-2" fill="none">
                                        <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-23"></use>
                                        <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="28.5135135" height="28.5690945"></rect>
                                    </g>
                                    <rect id="Rectangle-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="21.5918208" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-3" fill="#FF7A7A" fill-rule="evenodd" x="14.5444293" y="21.3790935" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy" fill="#D8CE00" fill-rule="evenodd" x="7.2191328" y="14.3590927" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="14.4654563" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-4" fill="#ADADAD" fill-rule="evenodd" x="14.3321019" y="7.23272816" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-4" fill="#FFFFFF" fill-rule="evenodd" x="21.3591289" y="7.23272816" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-5" fill="#FFFFFF" fill-rule="evenodd" x="7.2191328" y="7.23272816" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-6" fill="#6E6E6E" fill-rule="evenodd" x="21.7635621" y="21.2727299" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-7" fill="#C3C3C3" fill-rule="evenodd" x="7.2191328" y="0" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-8" fill="#7D7D7D" fill-rule="evenodd" x="21.4324324" y="0" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-9" fill="#3B3B3B" fill-rule="evenodd" x="21.4324324" y="14.4325342" width="7.2191328" height="7.23272816"></rect>
                                </g>
                            </g>
                        </g>
                        <g id="Group-Copy-5" transform="translate(28.000000, 258.000000)">
                            <mask id="mask-25" fill="white">
                                <use xlinkHref="#path-24"></use>
                            </mask>
                            <use id="Mask" fill="#D8D8D8" xlinkHref="#path-24"></use>
                            <g id="Group-Copy-2" mask="url(#mask-25)">
                                <g transform="translate(-2.000000, 0.000000)">
                                    <g id="Rectangle-2" fill="none">
                                        <use fill="#000000" fill-rule="evenodd" xlinkHref="#path-26"></use>
                                        <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="28.5135135" height="28.5690945"></rect>
                                    </g>
                                    <rect id="Rectangle-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="21.5918208" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-3" fill="#FF7A7A" fill-rule="evenodd" x="14.5444293" y="21.3790935" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy" fill="#D8CE00" fill-rule="evenodd" x="7.2191328" y="14.3590927" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="14.4654563" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-4" fill="#ADADAD" fill-rule="evenodd" x="14.3321019" y="7.23272816" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-4" fill="#FFFFFF" fill-rule="evenodd" x="21.3591289" y="7.23272816" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-5" fill="#FFFFFF" fill-rule="evenodd" x="7.2191328" y="7.23272816" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-6" fill="#6E6E6E" fill-rule="evenodd" x="21.7635621" y="21.2727299" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-7" fill="#C3C3C3" fill-rule="evenodd" x="7.2191328" y="0" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-8" fill="#7D7D7D" fill-rule="evenodd" x="21.4324324" y="0" width="7.2191328" height="7.23272816"></rect>
                                    <rect id="Rectangle-2-Copy-9" fill="#3B3B3B" fill-rule="evenodd" x="21.4324324" y="14.4325342" width="7.2191328" height="7.23272816"></rect>
                                </g>
                            </g>
                        </g>
                        <g id="Group-Copy-2" transform="translate(28.000000, 544.000000)">
                            <mask id="mask-28" fill="white">
                                <use xlinkHref="#path-27"></use>
                            </mask>
                            <use id="Mask" fill="#D8D8D8" xlinkHref="#path-27"></use>
                            <image class="avatar-placeholder" mask="url(#mask-28)" x="-3" y="-5" width="35" height="35" xlinkHref="https://ipfs.io/ipfs/QmayQXw5dy2Y6yt5SekcDN15tsBbaey651cwPaqoH5fBfF"></image>
                        </g>
                        <g id="Group-Copy-2" transform="translate(28.000000, 129.000000)">
                            <mask id="mask-30" fill="white">
                                <use xlinkHref="#path-29"></use>
                            </mask>
                            <use id="Mask" fill="#D8D8D8" xlinkHref="#path-29"></use>
                            <image class="avatar-placeholder" mask="url(#mask-30)" x="-3" y="0" width="31" height="30" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAABGdBTUEAA1teXP8meAAAAodJREFUeAHtmz2LWkEUhs8140ogYqEgbqFEFklztZBtFrYSmy1S7T8IJFjlDxgQO5t0FrZpY2dlcMHFIghWm0JSSBpBQXHRwi/UmxmHHbDbexTywTsizJV7Zsb3Pi/M8YxWoVD4Gg6Hb4nZVp8+EDm84BdXDyRuvvOCZVQ6naZIJMKKXy6X1Gg0KBgM+oQaodlsUrvdZg320XlPlnxxWqfTofsfJU7oPqZYLLJFmM1mtN1u9+N42Cv4jwIhgnyYEAEiaE+DBJAAErQCIAEkgASjAOwAOxgYsE+QUuyzSCMJo3Nx9ZksZip98eYVvXv7hTEr0Xg8pnK5TLVajRW/Xq8pm83uY48W4cZ+ZCcgv85f0uvra9aX6Pf71Ov19m/WADLoSQTYQYoBESCCNhJIAAkgQSsAEkACSDAKwA6wg4EB+wTYQcMgNptNyO/3UyKRMHi46bTPzpjlWJkOy8rwt0rFzXTm3ul0avrHdpQIkUAgQLZts8Z6vLwkj4fnqvu7O6pWq6x5TxnEW/0pV/AXjAUR5EOACBBBexEkgASQoBUACSABJBgFYAfYwcBwdC3SjPQHOl6vl5287XY7s2IRCoWsyWRCqkrLaa1WiyyLd7ZZHbJW56q5rVQqkRKC0xaLhQkTsjLrJJNJ84HbTjweJ8fh1eZTqRTFYjG3U5r7hTgNyNg2S0khAkTQzgIJIAEkaAVAAkgACUYB2AF2MDBgnwA7aBjEfD5fD4dDWq1WBg83HW4GqeZQ55Pz+byb6Q7u7Xa7NBqNDj577oX6i7DKYlUT9Xr9p6xM24PB4LnxB/dlMpmDa7cX6gFwm0rDj0nFn6rpwufzVeSPIr1oNMpdyz8bpyjK5XKb35d1mVA58RY1AAAAAElFTkSuQmCC"></image>
                        </g>
                    </g>
                    <g id="Dwitter" transform="translate(105.000000, 143.000000)">
                        <g id="Browser">
                            <g id="Rectangle-3-Copy-2">
                                <mask id="mask-32" fill="white">
                                    <use xlinkHref="#path-31"></use>
                                </mask>
                                <g id="Mask">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-33)" xlinkHref="#path-31"></use>
                                    <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-31"></use>
                                </g>
                                <g id="Group-Copy-4" mask="url(#mask-32)">
                                    <g transform="translate(162.650459, 511.500000)">
                                        <mask id="mask-35" fill="white">
                                            <use xlinkHref="#path-34"></use>
                                        </mask>
                                        <use id="Mask" stroke="none" fill="#D8D8D8" fill-rule="evenodd" xlinkHref="#path-34"></use>
                                        <image class="avatar-placeholder" stroke="none" fill="none" mask="url(#mask-35)" x="-6.19043674" y="0.5" width="65" height="63" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAABGdBTUEAA1teXP8meAAAAodJREFUeAHtmz2LWkEUhs8140ogYqEgbqFEFklztZBtFrYSmy1S7T8IJFjlDxgQO5t0FrZpY2dlcMHFIghWm0JSSBpBQXHRwi/UmxmHHbDbexTywTsizJV7Zsb3Pi/M8YxWoVD4Gg6Hb4nZVp8+EDm84BdXDyRuvvOCZVQ6naZIJMKKXy6X1Gg0KBgM+oQaodlsUrvdZg320XlPlnxxWqfTofsfJU7oPqZYLLJFmM1mtN1u9+N42Cv4jwIhgnyYEAEiaE+DBJAAErQCIAEkgASjAOwAOxgYsE+QUuyzSCMJo3Nx9ZksZip98eYVvXv7hTEr0Xg8pnK5TLVajRW/Xq8pm83uY48W4cZ+ZCcgv85f0uvra9aX6Pf71Ov19m/WADLoSQTYQYoBESCCNhJIAAkgQSsAEkACSDAKwA6wg4EB+wTYQcMgNptNyO/3UyKRMHi46bTPzpjlWJkOy8rwt0rFzXTm3ul0avrHdpQIkUAgQLZts8Z6vLwkj4fnqvu7O6pWq6x5TxnEW/0pV/AXjAUR5EOACBBBexEkgASQoBUACSABJBgFYAfYwcBwdC3SjPQHOl6vl5287XY7s2IRCoWsyWRCqkrLaa1WiyyLd7ZZHbJW56q5rVQqkRKC0xaLhQkTsjLrJJNJ84HbTjweJ8fh1eZTqRTFYjG3U5r7hTgNyNg2S0khAkTQzgIJIAEkaAVAAkgACUYB2AF2MDBgnwA7aBjEfD5fD4dDWq1WBg83HW4GqeZQ55Pz+byb6Q7u7Xa7NBqNDj577oX6i7DKYlUT9Xr9p6xM24PB4LnxB/dlMpmDa7cX6gFwm0rDj0nFn6rpwufzVeSPIr1oNMpdyz8bpyjK5XKb35d1mVA58RY1AAAAAElFTkSuQmCC"></image>
                                    </g>
                                </g>
                                <rect stroke="#E9EAED" mask="url(#mask-32)" x="118.927523" y="488" width="498.194495" height="105.5" rx="12"></rect>
                            </g>
                            <g id="Menu">
                                <g id="Address-Bar-BG">
                                    <use fill="url(#linearGradient-7)" fill-rule="evenodd" xlinkHref="#path-36"></use>
                                    <path stroke="#C1C1C1" stroke-width="0.5" d="M0.25,36.75 L816.75,36.75 L816.75,6 C816.75,2.82436269 814.175637,0.25 811,0.25 L6,0.25 C2.82436269,0.25 0.25,2.82436269 0.25,6 L0.25,36.75 Z"></path>
                                </g>
                                <g id="Address-Bar" transform="translate(193.500000, 7.000000)">
                                    <g id="Address-Bar-BG">
                                        <use fill="black" fill-opacity="1" filter="url(#filter-38)" xlinkHref="#path-37"></use>
                                        <use fill="url(#linearGradient-9)" fill-rule="evenodd" xlinkHref="#path-37"></use>
                                        <rect stroke="#D2D0D2" stroke-width="0.5" x="-0.25" y="-0.25" width="430.5" height="22.5" rx="4"></rect>
                                    </g>
                                    <text id="dwitter.io" font-family="Lars-Regular, Lars" font-size="13" font-weight="normal" fill="#0D0B00">
                                        <tspan x="187.3035" y="16">dwitter.io</tspan>
                                    </text>
                                </g>
                                <g id="Fullscreen-Icon">
                                    <use fill="#909095" fill-rule="evenodd" xlinkHref="#path-39"></use>
                                    <circle stroke="#6E6E71" stroke-width="0.5" cx="61.9342516" cy="19" r="5.75"></circle>
                                </g>
                                <g id="Hide-Icon">
                                    <use fill="#909095" fill-rule="evenodd" xlinkHref="#path-40"></use>
                                    <circle stroke="#6E6E71" stroke-width="0.5" cx="41.9342516" cy="19" r="5.75"></circle>
                                </g>
                                <g id="Close-Icon">
                                    <use fill="#909095" fill-rule="evenodd" xlinkHref="#path-41"></use>
                                    <circle stroke="#6E6E71" stroke-width="0.5" cx="21.9342516" cy="19" r="5.75"></circle>
                                </g>
                            </g>
                        </g>
                        <rect id="Rectangle-3" fill="#60697A" opacity="0.137001812" x="125" y="95" width="499" height="55" rx="12"></rect>
                        <text id="You:" font-family="AvenirNext-DemiBold, Avenir Next" font-size="20" font-weight="500" fill="#000000">
                            <tspan x="247" y="215">You:</tspan>
                            <tspan x="247" y="242"></tspan>
                        </text>
                        <text id="You:" font-family="AvenirNext-DemiBold, Avenir Next" font-size="20" font-weight="500" fill="#000000">
                            <tspan x="247" y="535">You:</tspan>
                            <tspan x="247" y="562"></tspan>
                        </text>
                        <text id="DWITTER." font-family="AvenirNext-DemiBold, Avenir Next" font-size="15" font-weight="500" fill="#767676">
                            <tspan x="53" y="63">DWITTER.</tspan>
                        </text>
                        <g id="noun_24390_cc" transform="translate(17.000000, 46.000000)" fill="#60697A" fill-rule="nonzero">
                            <path d="M10.7067024,17.363769 C13.8961196,17.0751264 16.1878447,16.2408468 16.1878447,16.2408468 L23,16.2408468 L19.8147229,15.5269738 L21.4364565,15.5269738 C21.4364565,13.8612702 17.5349577,13.3603693 16.2432748,13.2478154 L9.16500898,8.08127865 C8.91223841,7.89924104 8.63025778,7.73624004 8.3278071,7.63605987 C6.44318288,5.9346626 6.26079247,4.72488586 6.24791244,4.69752073 C5.95374178,2.38718981 5.41163056,1.50008365 5.38058049,1.46819732 C3.46053619,-1.24333021 1.6801022,0.631300234 1.6801022,0.631300234 L0.952610564,1.50579463 C0.952610564,1.50579463 -0.0228216228,1.96338721 0.000408429255,2.67726019 L0.952610564,2.67726019 C2.71671452,2.67726019 2.36136372,4.56117099 2.36136372,4.56117099 C1.78866244,8.25141837 2.09824313,9.98375014 2.09824313,9.98375014 C2.91865497,14.5568204 7.60997549,16.385763 7.60997549,16.385763 C9.31358931,17.4767989 9.03459869,18.7681951 9.03459869,18.7681951 L8.39243725,20.3296733 L5.94477176,21 L10.7688026,21 L9.14292893,20.325628 L9.43732959,19.6150864 C10.5986022,18.6682529 10.7067024,17.363769 10.7067024,17.363769 Z M3.01180518,1.41846417 C2.83332478,1.41846417 2.68819446,1.26831289 2.68819446,1.08294387 C2.68819446,0.897812813 2.83309478,0.74766153 3.01180518,0.74766153 C3.19051558,0.74766153 3.33518591,0.897812813 3.33518591,1.08294387 C3.33518591,1.26831289 3.19051558,1.41846417 3.01180518,1.41846417 Z" id="Shape"></path>
                        </g>
                        <g id="Group-Copy-2" transform="translate(161.000000, 202.000000)">
                            <mask id="mask-43" fill="white">
                                <use xlinkHref="#path-42"></use>
                            </mask>
                            <use id="Mask" fill="#D8D8D8" xlinkHref="#path-42"></use>
                            <image class="avatar-placeholder" mask="url(#mask-43)" x="-4.53997803" y="0" width="65" height="63" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAABGdBTUEAA1teXP8meAAAAodJREFUeAHtmz2LWkEUhs8140ogYqEgbqFEFklztZBtFrYSmy1S7T8IJFjlDxgQO5t0FrZpY2dlcMHFIghWm0JSSBpBQXHRwi/UmxmHHbDbexTywTsizJV7Zsb3Pi/M8YxWoVD4Gg6Hb4nZVp8+EDm84BdXDyRuvvOCZVQ6naZIJMKKXy6X1Gg0KBgM+oQaodlsUrvdZg320XlPlnxxWqfTofsfJU7oPqZYLLJFmM1mtN1u9+N42Cv4jwIhgnyYEAEiaE+DBJAAErQCIAEkgASjAOwAOxgYsE+QUuyzSCMJo3Nx9ZksZip98eYVvXv7hTEr0Xg8pnK5TLVajRW/Xq8pm83uY48W4cZ+ZCcgv85f0uvra9aX6Pf71Ov19m/WADLoSQTYQYoBESCCNhJIAAkgQSsAEkACSDAKwA6wg4EB+wTYQcMgNptNyO/3UyKRMHi46bTPzpjlWJkOy8rwt0rFzXTm3ul0avrHdpQIkUAgQLZts8Z6vLwkj4fnqvu7O6pWq6x5TxnEW/0pV/AXjAUR5EOACBBBexEkgASQoBUACSABJBgFYAfYwcBwdC3SjPQHOl6vl5287XY7s2IRCoWsyWRCqkrLaa1WiyyLd7ZZHbJW56q5rVQqkRKC0xaLhQkTsjLrJJNJ84HbTjweJ8fh1eZTqRTFYjG3U5r7hTgNyNg2S0khAkTQzgIJIAEkaAVAAkgACUYB2AF2MDBgnwA7aBjEfD5fD4dDWq1WBg83HW4GqeZQ55Pz+byb6Q7u7Xa7NBqNDj577oX6i7DKYlUT9Xr9p6xM24PB4LnxB/dlMpmDa7cX6gFwm0rDj0nFn6rpwufzVeSPIr1oNMpdyz8bpyjK5XKb35d1mVA58RY1AAAAAElFTkSuQmCC"></image>
                        </g>
                        <g id="Group-Copy-2" transform="translate(140.000000, 110.000000)">
                            <mask id="mask-45" fill="white">
                                <use xlinkHref="#path-44"></use>
                            </mask>
                            <use id="Mask" fill="#D8D8D8" xlinkHref="#path-44"></use>
                            <image class="avatar-placeholder" mask="url(#mask-45)" x="-1.66666667" y="0" width="35" height="35" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAABGdBTUEAA1teXP8meAAAAodJREFUeAHtmz2LWkEUhs8140ogYqEgbqFEFklztZBtFrYSmy1S7T8IJFjlDxgQO5t0FrZpY2dlcMHFIghWm0JSSBpBQXHRwi/UmxmHHbDbexTywTsizJV7Zsb3Pi/M8YxWoVD4Gg6Hb4nZVp8+EDm84BdXDyRuvvOCZVQ6naZIJMKKXy6X1Gg0KBgM+oQaodlsUrvdZg320XlPlnxxWqfTofsfJU7oPqZYLLJFmM1mtN1u9+N42Cv4jwIhgnyYEAEiaE+DBJAAErQCIAEkgASjAOwAOxgYsE+QUuyzSCMJo3Nx9ZksZip98eYVvXv7hTEr0Xg8pnK5TLVajRW/Xq8pm83uY48W4cZ+ZCcgv85f0uvra9aX6Pf71Ov19m/WADLoSQTYQYoBESCCNhJIAAkgQSsAEkACSDAKwA6wg4EB+wTYQcMgNptNyO/3UyKRMHi46bTPzpjlWJkOy8rwt0rFzXTm3ul0avrHdpQIkUAgQLZts8Z6vLwkj4fnqvu7O6pWq6x5TxnEW/0pV/AXjAUR5EOACBBBexEkgASQoBUACSABJBgFYAfYwcBwdC3SjPQHOl6vl5287XY7s2IRCoWsyWRCqkrLaa1WiyyLd7ZZHbJW56q5rVQqkRKC0xaLhQkTsjLrJJNJ84HbTjweJ8fh1eZTqRTFYjG3U5r7hTgNyNg2S0khAkTQzgIJIAEkaAVAAkgACUYB2AF2MDBgnwA7aBjEfD5fD4dDWq1WBg83HW4GqeZQ55Pz+byb6Q7u7Xa7NBqNDj577oX6i7DKYlUT9Xr9p6xM24PB4LnxB/dlMpmDa7cX6gFwm0rDj0nFn6rpwufzVeSPIr1oNMpdyz8bpyjK5XKb35d1mVA58RY1AAAAAElFTkSuQmCC"></image>
                        </g>
                        <rect id="Rectangle-3" stroke="#E9EAED" x="125.5" y="170.5" width="498" height="158" rx="12"></rect>
                        <g id="Group" transform="translate(180.000000, 341.000000)">
                            <g id="Group-Copy-3" transform="translate(21.750000, 18.785311)">
                                <mask id="mask-47" fill="white">
                                    <use xlinkHref="#path-46"></use>
                                </mask>
                                <use id="Mask" fill="#D8D8D8" xlinkHref="#path-46"></use>
                                <g id="Group-Copy-8" mask="url(#mask-47)">
                                    <g transform="translate(3.000000, -1.000000)">
                                        <g id="Rectangle-2" fill="none">
                                            <use fill="#202020" fill-rule="evenodd" xlinkHref="#path-48"></use>
                                            <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="35" height="36"></rect>
                                        </g>
                                        <rect id="Rectangle-2" fill="#FFFFFF" fill-rule="evenodd" x="0" y="28" width="9" height="9"></rect>
                                        <rect id="Rectangle-2-Copy-3" fill="#FFFFFF" fill-rule="evenodd" x="17" y="28" width="9" height="9"></rect>
                                        <rect id="Rectangle-2-Copy" fill="#B7B7B7" fill-rule="evenodd" x="9" y="18" width="9" height="9"></rect>
                                        <rect id="Rectangle-2-Copy-4" fill="#FFFFFF" fill-rule="evenodd" x="17" y="9" width="9" height="9"></rect>
                                        <rect id="Rectangle-2-Copy-5" fill="#FF7A7A" fill-rule="evenodd" x="9" y="9" width="9" height="9"></rect>
                                        <rect id="Rectangle-2-Copy-6" fill="#42E79D" fill-rule="evenodd" x="26" y="28" width="9" height="9"></rect>
                                        <rect id="Rectangle-2-Copy-7" fill="#A2A2A2" fill-rule="evenodd" x="9" y="0" width="9" height="9"></rect>
                                    </g>
                                </g>
                            </g>
                            <rect id="Rectangle-3-Copy" stroke="#E9EAED" x="0.5" y="0.5" width="437" height="132" rx="12"></rect>
                        </g>
                        <text id="Inbox-–-Messages" font-family="AvenirNext-Regular, Avenir Next" font-size="14" font-weight="normal" fill="#000000">
                            <tspan x="433" y="60">Inbox – Messages</tspan>
                        </text>
                        <text id="Profile-Messages-Fol" font-family="AvenirNext-Regular, Avenir Next" font-size="12" font-weight="normal" fill="#000000">
                            <tspan x="12" y="216">Profile</tspan>
                            <tspan x="12" y="232">Messages</tspan>
                            <tspan x="12" y="248"></tspan>
                            <tspan x="12" y="264">Following (424)</tspan>
                            <tspan x="12" y="280">Followers (212)</tspan>
                            <tspan x="12" y="296"></tspan>
                        </text>
                        <text id="Settings" font-family="AvenirNext-Regular, Avenir Next" font-size="14" font-weight="normal" fill="#000000">
                            <tspan x="17" y="537">Settings</tspan>
                        </text>
                        <text class="nickname-label" alignment-baseline="middle" font-family="AvenirNext-Regular, Avenir Next" font-size="13" font-weight="normal" fill="#000000">
                            <tspan x="12" y="125">@victor_eremita</tspan>
                        </text>
                        <text id="Since-2018." font-family="AvenirNext-Regular, Avenir Next" font-size="14" font-weight="normal" fill="#000000">
                            <tspan x="12" y="163">Since 2018.</tspan>
                        </text>
                        <g id="Path-2">
                            <use fill="black" fill-opacity="1" filter="url(#filter-50)" xlinkHref="#path-49"></use>
                            <use stroke="#979797" stroke-width="1" xlinkHref="#path-49"></use>
                        </g>
                        <rect id="Rectangle-4" fill="#FFFFFF" x="178" y="109" width="441" height="28"></rect>
                        <path d="M153.311671,341 C151.711764,343.8 151.445113,348 157.666975,348 L157.666975,344.5 L163,349.75 L157.711417,355 L157.711417,351.5 C153.04502,351.5 150.956252,349.09375 151.000694,346.25 C151.000694,344.5 151.84509,342.575 153.311671,341 Z" id="Shape" fill="#CACACA" fill-rule="nonzero"></path>
                        <text id="@insightful_friend" font-family="AvenirNext-DemiBold, Avenir Next" font-size="15" font-weight="500" fill="#000000">
                            <tspan x="266" y="373">@insightful_friend</tspan>
                        </text>
                        <text id="Welcome-Back," font-family="AvenirNext-Regular, Avenir Next" font-size="12" font-weight="normal" fill="#A7A7A7">
                            <tspan x="12" y="103">Welcome Back,</tspan>
                        </text>
                        <g id="Group-5" transform="translate(249.000000, 232.000000)" fill="#A7A7A7">
                            <rect id="Rectangle-9" x="0" y="0" width="266" height="7"></rect>
                            <rect id="Rectangle-9-Copy" x="0" y="29" width="250" height="7"></rect>
                            <rect id="Rectangle-9" x="0" y="14" width="226" height="7"></rect>
                            <rect id="Rectangle-9-Copy-2" x="0" y="44" width="263" height="7"></rect>
                        </g>
                        <g id="Group-5-Copy" transform="translate(265.000000, 396.000000)" fill="#A7A7A7">
                            <rect id="Rectangle-9" x="0" y="0" width="234" height="6"></rect>
                            <rect id="Rectangle-9-Copy" x="0" y="26" width="220" height="6"></rect>
                            <rect id="Rectangle-9" x="0" y="12" width="199" height="6"></rect>
                            <rect id="Rectangle-9-Copy-2" x="0" y="39" width="231" height="6"></rect>
                        </g>
                    </g>
                </g>
                <polygon id="Polygon" fill="#D8D8D8" points="44.4616217 60 54.9232434 67.6008131 50.9272595 79.8991869 37.9959839 79.8991869 34 67.6008131"></polygon>
            </g>
        </g>
    </g>
</AppsImageContainer> </div>   }

};

export default AppsImage;
