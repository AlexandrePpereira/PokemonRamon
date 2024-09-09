import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Image, Modal } from 'react-native';

const style = StyleSheet.create({
    estiloLogo: {
        marginTop: 25,
        height: 200,
        width: 300,
        borderRadius: 25,
        marginBottom: 25
    },
    container: {
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#FFE0B2' // Laranja claro
    },
    botoes: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 40
    },
    botao: {
        backgroundColor: '#FFC107',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        width: 120,
        margin: 10
    },
    txt: {
        fontWeight: 'bold',
        color: 'white'
    },
    inputBox: {
        backgroundColor: '#FFEBE5',
        width: 320,
        marginTop: 50,
        marginBottom: 50,
        padding: 10,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5722',
        opacity: 0.98,
        borderRadius: 20,
        marginTop: 180,
        marginRight: 40,
        marginLeft: 40,
        padding: 20,
        flexDirection: 'column'
    },
    txtmodal2: {
        color: 'white',
        marginBottom: 20
    },
    botoesmodal: {
        flexDirection: 'row'
    },
    botaomodal: {
        backgroundColor: '#FFC107',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        width: 120,
        margin: 10
    },
    txtsaldo2: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFC107'
    },
    txtsaldo3: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FF5722'
    }
});

export default function BackScreen() {
    const [saldo, setSaldo] = useState(7320.92);
    const [valor, setValor] = useState('');
    const Logoist = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFhUVGBUXFxcVFxcXFxUXFRcXFxUXFxUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEgQAAIBAgIFBgkICQQCAwAAAAECAAMRBCEFBhIxUSJBYXGRsQcTMlKBkqHB0SMzQlNyc4KyFBUWNENiwtLhJGOis4PwRFTi/8QAGwEAAgMBAQEAAAAAAAAAAAAAAQIAAwQFBgf/xAA+EQACAQMABgcECQMEAwEAAAAAAQIDBBEFEiExQVEGExQyYXGRIlKBwRUWMzRyobHh8CNCYiRTktElNbKC/9oADAMBAAIRAxEAPwDMTzR7E4yBIGFe1XPny7Zoms0zPTeKhcBZiNY9VgbJgKqxWxkFVYjYyCokRsbAVRFbDgeBFyEeBFCOUSMgtoAg6tZVKg73YKo4ljYd8eEHLLW5LJXUmoLLNpS0QgUAljb0TizupN5SOPK6k3lDv1UnFu2L2mQO0zGnRK+c3sjK5fIPaZFYUKsVPMbdc1Zyso2KWYpj7RQDbQ5CdAAW0gRbSAEtCQj6IrlsYUO5KZIHSSM+wy24go2utxbKLiWzBqCJyMmIaRCmQFWTI9Rjwe1DR3ozJTOdPJ1RjLGTFwDZYyYATrGTARqy5S2O8GDNaJP+qt0v+Vp06/2HoZ+LNM4nLQyBkRgjSISHWhCZ+bzUOAgIQ8XhCeUN8vp1MbGVThxQbCY6ws97jnt3xKlLO2I8KnBk5MUnnewyh0pFuUFpYlCTZhlvHCLKnNb0FVI7sklKi8RKnGQ6nHmFV13Ai/ARNVjKSe4MBEbGHBOkwZIOC9MGUEdbpgILaQhBxGGdsRhmBWy1qNwb3N6i7ppp1IxpVIve4v8ARmO7UnFtHppnlTjiGQIkhDN4zFqKji/OZ1YU5ai8jq0qbdNCpUvA44I44CRRTrSEFtIQ6AATCKGqBD5pY+ggd7ST2QcvgV1Z6q2EmjhKa4naVFDGmbkCxPKHPKZVZyoYb2ZMbbayyymQQ6QIOruPUY8N6DHeZ6ph2809hnRjNHTU4viRyJaMO/RmIyU9kXXXFlTnFb2CbB1PMMdVIcwdZDmRcVg3CklTLYVIt7GRVIN4yYvRhtjB9s+0Ee+dut93fkZ8bWbF1nFTGBMIyYQbCOgjbwhKACbjWPAgZB6iAIVU6IjY2AyrFbGSLTR+DS20VFza+XQJlrVZZxkpmkpFh+jqB5I7BM+vJveKU9DlFmI3m3oE2T2JIvorZkkASovHQEFkIdIQ6QjGFgKlC+7x9G/riPFZjP8AC/0M119mz0MzzRxBDCE6QhidIfO1Ptt3zvU+4vI7tD7OPkOwbm9uaLUWzI1WKxktBMrMY60GSHWkIdIAJov59uimPa3+PZBX+xXn8jPc7kWFQWqByMtkqTwNwRfoyMzR9qm48cmbeh2JrDZyIuSoyPEgG3ogpwettREg5lQBphCJaEJRYxAKuYsCyjm+kQPfOhTeYfA3Ql/TLgrMOTAwbLGTAAdZYpAPPMdoGqMQalMLYPtC7AbmvPSUrum6WrJ8DZyZfuBxE56QNvICyjiPb8I+CZfICyjzh7fhHQcvkNsOI9vwhJreBQKJtNo9RAwhUWK2MGQRGwoMqxGyxIu9HryR6JirP2jPPeTGXIylPaKUOEWw9Jm6o9pfR7pJErLjpCCyELTBaDeogfaChsxe5NjuMzVbqFOWrxMVS9jF4SyH/ZtvrR6p+Mq7dH3Srt/+IHE6qM6lTVHQQCCCMwQb5SynpKMHlRFleqSw4jH0rjKDeKqPTcgCzFDdhzG4YDm4R+z21Va8U1nx/YlK1p1VrJsUaw1/9v1G/vi9io+Pr+xb2CPMeNYa1sxT6wDl2sYOx0fH1IrCGdrKwsWJY5km56SZowksI3RiksINhByhFn3RandLYTGYmdIQWQBwEBAui/nmHOaYt6GN+8dsFdf0l5/Iz3G5FyJgMpD0kvzf3iTRbvveTGjuZMImcUS0JBLSZDkz2lDyr8KlM9jrOpQWxeT/AEN0fs/gXxWc3JgGFYSAnWOmAzuMTlN1mdKD9lG+HdRDqrLosbIBljoAJhHRMgysYiKdRNhpCKsVsYMgiMZIMoiMdBkERjIutHjkiY63eM095LIylC3ilFhhl6T3zfPeaKPdJNCgznZRSx4D/wBylcpKKy2NOcYLMmSl0NiD/Dt1svxlXaaPvGd3dLmK2gsSQRsqDY72HukV3RT3iyvYY2GpwVMpTRGtdVVTbdcAA905VaSnUlKO5tnKDykB0hDK6zfPL9gd7Tr2f2XxOtYr2H5lYBNRtHRSCXhwHBIwPlCJU7pVV7pbzGYjpCCwEOEJAdWlchgxVl3Mu8X3jPIjoMaM8Jp7U+AHFNYYVcZXH00PWnwYRXTov+38yvqIELSmmatM0y4QoHUsVUgi3Wx6ZfQtac1JRyngR0UlsNKmKpkAh1IOYzGc5cqM08NMy4aHbYO4jtEXVlyIczAZkiRRYUm9xm9KPyXbrPtvOpQ7yR0FHEcGkBB3eicuSw8HOEKyIAJ1joiM/jV5bdc6NN+yjoU+4iE6y5MJHdZYmACyx0wMGRGIUiCbWawyxGFEihQZvJUt1AnuiSklvYXOMd7JlPRtb6p+z4yl1qfvIHX0+YddF19/im9ndE6+lnvIiuaXMsMDkLEWI7R6JnrbXkWTyS7ZSniKUNDd6T3mb5bzTS7hZ6ksfH4kE81MjoHKymbSWOpptc2c69zrI2E4hhOhIdIgnSAOgIZDW7EpTqhnYKNgb+fNt07+irStcR1KUW3ngdC3uKdGi5VJJLP/AEZhtZ8P5x9VvhPSR6LX7WWl6lD09Z53v0E/aajxPqmWfVO//wAfX9hfrBac36CHWaj/ADdhhXRO+/x9f2F+sNr4+gXB610Fa52/V/zFn0RvmsLV9RZ6ftZRxt9Cf+2eG/3PV/zKfqZpD/H1/Yz/AE5a+PoPXXLDcX9X/MV9DdIf4+pPpy18fQf+1+G4v6hg+p2keUf+X7E+nLTm/QnaO07QrGyONrzSCp9AO/0TmX2gb6zjrVYbOa2r8jXb6Qtq7xCW3kWimcZo2HQEGVaSsLMARwMaMnHagkY6Oo/Vr2Szr6nvMgJ9G0gVIQbyD6p+EtjXm09v8yQk0KCp5KgdUonOUt7CFAigETaUWV3AG4A5DoF90Lak8uKbEdOL3oQ7R/iVPXPuhyluivQnVx5DAhH03PW7kdhMLnlbl6IOpHkMYSJkYCossTARaiy1AAMI6ADtHIUiibWbAoiBNvoKls0KfEqGPW2fvnFu5Zqy9DkVJa022WiCY2KGEQhSaQW1ZukKfZN9N5pI6FDuCc0nEsKGkMu3vM3z3mml3S11UFsS/wDNS/K4/uma+2268H+qMN8tzNbOKc46QgLE1GVSVQufNBUE+liBLKcYylhywEgnSNf/AOnV9ej/AHzR2el/ur0l/wBBx4lfpDWvxFzWwtZAM7k0yD1EMQZsttEO5nGFKom28cQyjiDnlYR5brbp846v43Y2FVQire5sCTc9J2ubgJ9d0FoiOjLbqtbWbeW/E8rdXHXT1min2Z3TLkIBChMjhDgByLeTAW8DrQgyOUdUgrYQCQTI4Gx7jwtz3glFNYa2ETa2o32qemfG02FQ8qnvJ51N7E9ORB6hxnynpVoeNpcRnRWIT4cn++89poe+lcUnGfej+aNfQwO0qtteUAfQc54ypV1ZOODe7jbsQ3F4TYFwb5yU6ms8DU6zk8MiS00DKv0ftf0tLIbpeXzF4jog50gDpCHSEGkQgGMIwANRY6ARaglqYCNUWWJgBERkwbCkSbmbRzDI9RgW9BZvtDfMUvu0/KJwLrZVl5s40t7LFRMrIEUQMJTaT+e/Cvvm6i/6Rut+4N5pOJYUFI5dveZ0JbzXS7qJOjMaKFYVWB2dlka28Bip2rc9ioyldWk6tJwW/ejPd0nOOw1P68w31y+34Tldir+7+hzOpqe6xNFaRp13qGm20E2Vy3Z3Pu9kNxbzowjrLGRJxcUkyymQQSQJj/CgP9IDwfvRv8dk9R0Sf/kYoqufu9TyPHhPs6PKD5YgBAIRWxV6YQMcIQCrABjwYcCsfIKPFpAPJf6nrd6y8aLfmUe8zx3TLHZab/zX6M7/AEeb6+a8Pmer6Ne9GmQb8hPyifILiLVWXmzuNbRmkjyPSJKK2l1DvZKqajaNrHyPt/0PLae6Xl80L/ch0rGOkILAQ6QghEIBpEIANQR0KRqolqARXliIBMsBjJRpNrNo5/JbqMC7yC9xvNX3DYekQb8hR6QACO0ThXqarSzzOPNYk8lqomMUfBtGKjSKg1LjgB3zZSbUMG2hlQwRqrhQSdwEsitZ4LiRojQ9JqKO6klhtbyLXzAy6CIlzdThUcY8DHO6qJ4i9iJn6iw/mH1m+Mo7bW5/kL2qrzOOgcOfoH1m+MPba3MnaqvMh6t6JGGq4lFJKMaTLtWuLh7i43/5mi+uevpU5Nbdq/QqnNyxkv5zBBJCGR8KH7n+Mfleem6Jf+ygU3P2FTyPHLT7Sjyo8COgNhIwg4GEGByiEDFJkQBwNv8A3fIDeFU35pBGsDgIAZNf4MaStialxf5I/nSeG6eyasYY9/5M7OhZNVpY5fM9DbRlH6pM9/JE+Uq5q+8z0uvLmR6+j7EeKWw5wMgO2XRr6y9t7S+nWSWJA/0Gp5vtHxk62HMs6+HMq9IVbVqFPnJqsfwpsj8x7Juox/ozn5IsjteUSzMox0hBZCHSEOkAJCKwVQR0Ai1BLUQiVBLUAC0dAzggJgB500Ot4GjXYdNG3+l7JW6+OAddhKGiivkVCt87AsB2AwSus70DY96JCaOc+VUJHWx7zK3cRW5B9nkibhMKKe6+fTKKlVz3kwuRKEpIB0j803UZZR76AX2iBahSH+2n5ROfdba0vM5k+8yWJQKKJCFb+nJTxJpuQpqIrJc2B2CQwvxzE2qhKpba8VnDafxwHGUWW2OI7Zj1XyBgaai8R2iHUlyIY7wmYpDhdhSC21c2ztZWGfbPUdFKUo6QhJrAtzTl2apJrZg8hE+yo8iEBjIUWMmQLfmjITHEVZAMcsgGPEIB95BBwMAMGx8Fv71V+5P/AGU54bp99wh+P5M6+h/tX5fM9NM+RHpBoOdui8fHs5IxYhDAYvFltKlT9HkKOA2C3tJM9JCmo2Ca47fzN9HuGgnMLDpAiQkFgIdCQSQUG8ZCkarLUAjPLEBkdpYgA6cZlxJpSqQSSkrYUGWVhwPEAR8UgDSI+TbqMto99ANDo0/I07eYn5ROdcfay82cyXeZIlIpwkIZjW3DLUqU1KhiRYA77k7hOvo+co05YfE6FnqqEpSICav1dwo9uz8Ze7yHGZe7iggWK0c1IgOgBOYtY90eFdVFmLLqVSFTulNrMbUG9PcZ2dA/f6fmZNLr/ST8geoOrOGxdB6lYMWFRlGyxWwCqebfvM6/SXpDd2VzGnQaSxnas8Ty1jZUqsHKZl9acMmHxFenTB2Eaygkk+SDmTvzJnqNEXtSvYU69XbJrL4cTBcUoxrOEdyPRH1Fwhw+2ofb8VtA7ZttbFwbcLzw9LpZpCd9Gk3HVc8buGcHTejqKpOW3OM/keYI959RTOA0FSOIx4kFHQgNLqNq4uOaoXLrSpgKWUgE1DY7IJBFguZ61nkeknSb6N1aVGKlUfPcl8Do2dh1y1pvCIGnKOHSsyYV3amuRdyDtMN5WwGXN02nb0TVvKttGpeJKb24WVhcM7XtMNyqcZtU9q8TReDD97qfct/2U55jp6v/AB8Pxr9Gb9DfavyPTbT5EekKLWLFVKbJ4tyt1YHJTfNbHMdfbOlZRhKDU452my0oRq51uBUDSeJvc1zbhsIP6ZrdGhjufmzarKkR3zc1CBtne1htbrb+qOm1HUW7kaVTjFYSCU8YysoJ8plQX5y7BR7TF6pST8Fn0K6qhGOWaf8AVf8AP7P8zldo8Dl9qfI79V/z+z/MnaPAnaXyGto3LJr+i3vhVdcUFXO3aiCZoNORJAA3MZC4I1WWRIRaktiBgGlgAFOqvnDtljhLkW4JVOsnnDtlThLkTaSadVfOXtEqcZchsMOtRfOXtERxlyDhhBUXzl7RF1ZcibRfGr5y9og1ZcibRKlRSCNpd3EQxjJPcRJkLA6Tq0l2FIKjcGF7dRBBtNFWjTqvMlt8B5WcJ7dxKXWGtwp+q390odlS8f58BOwQ5sd+0dXzE7G+MnYafN/z4A7BDmytqYpqlai7m58bT9A2gLDtmqFOMKcox3Yf6D1aUYUXGJuZ585BndbBnT6m71nTsO7I6Wj/AO74fMxmtHzDen8pnptAffqZNL/dJ+Ra+CUf6N/vn/Ikq6Zffl+H5s4OjPsn5mT0li8Oml6jYkA0BUqbYZNsH5MhbrY35Vp6WjC5noKnTttk3FY2448/IwtwV25T3ZPWK+Lp06JqnKmiF8h9ALfJermnzalSrVK6hHvt438c8/M7kpRUNZ7sfkeQ626QwtXEpUoL8kFpqwVNi9nYvYW37JGfRPr+hbS9s7CUarzUy2tueGz8zzVzUpVa3srETXDTehKFkWkGHneJap/yYFjPIXFn0kqJ1as2vDWSXothvpzsk9WKT+BZaS1ZweMw4q4ZFRmUtTdF2Aeh0sOcWzFxMejekWkLC6VK5m5RziSbzjxT/iLa9lSq08wWHwKPwc6HoYmjWavSDlauwL3BACKSMjxYzs9LNOXdtcwp289WOrnZx2mXR1nSnBymsso9YF/RcRXo4d6lOkpuKa1H2M0UtyS3Obz0WgrelcWVK6rxUqjWctZ4s597UlGtKnF4jncbKnqng2wYr7DBjQD5O1trxe1uvxnkKfSrST0iqDktVz1caq3ZwdGWjreNFyxtxnf4GU1TqslYlHZDsEXU2PlLv6J6rpfGMrFZSftLf5Mp6O041LpqXu/NGwGPrj+PU/4nvWfMurpe4j23Y6XIZWrs5u7EnpkUVHZFYL4U4wWIobIOJCQjYs8uj9/Q/wCxZdSWyf4X+hnuvs2ejGeZOGNhCIYSFFWHKbrPeZ0I7kdKHdQMwkGPGQCLUlqARqssiKR2MsRCoTCtNjqRLtodMG3GI6qCskmngW4yt1kNkMmAbjK3WQchRo8+dF65EyOOjzxg65BRAr7Sm0vhiSFcsCU8RxhcORbCtjeFFZeMTUkXdZHmL41eIk1Jcia8eYx6g5JVgCGVhfPNSCMvRGims5Qs9ScXHJctrLWO40h6Cf6pj7DS5P1/Yxqype8RcZpB61i+ydm/kiwzt0nolkKMKWVE00aMKWdVme1pPyB9PcZ3dAffqfmY9LNdkn5F14Jf3Jvvn/KkzdMX/r1+FfqziaN+x+J51rsb4rE/ev7DafQNDxxoyj+FHHrv/US8z2HSlBqmBqIguzUCFHFjTyHbafKrKrGjpKE5vCU9v/I9BUi5W7S935Hk2qujf0nFph2uBymqcxVUFyM9xJsOi8+sab0yrGylWp4cty5ZfE85bWrq1NWW49J0/pjDaKpolLDqWcNsotlyW12dyCTvHE5z5zo+wvtPVJ1KlV4jvbf5JbjtVqtK0SUY/wA8y41Z0m2Kw1Ku1PxZqAnZvew2iAb2F7gA7uecTSNtG1uZUoy1tXia6NR1IKTRn/Bh81ixz/pdXs2KdvfO30rz2ik3/txMth3H5mN19Uri8TcEXzF+cFFsR0b+yfRujk1LRFHHCOPicC9ji6eeZ6ZYro2xFiMKARzgilunym2alpiDX+6v/o9DWWLaX4fkeb6rAmtyQTyTuuedZ9P6W/8Ar9vvL5nL6OS1bzb7r+Rr2pMMyrAdIM+YZXBnvFUi9zGyFg6AAhEKIQtIGxpHhWo/9izRQWdZf4v9Ci5+zZ6UZ5c4SGwhEMJCixA5bdZ75vj3UdGHcQMmMggXMdAZHqSxAZGeWxARyZYgAUjMtJFMxGQlU2lTCHSVsYKDFCOtAQj4iipGY3kAdJOQEthJ52Eb2bSSdUaZ8qowPBbZdt5V9JyW6JhlXy9g39jaX1tT/j8IfpWfuoXrpCfsZS+tq/8AH+2T6Vn7qJ18itqaACsy7RNjv4zUrzWSeDZT2xTA4jRIUE3OUeFzrPGB8E7Qmh66ttMllIO8gHO1suaU3NxSawpbSl147skLX3RtUYd6lhsqrXzzz4DnnR6O14dupxztyYr+qpW8kuRm9T9dUweHFFqDsdpmLBlA5RHMeoT1OmOi9bSF11ymksJYxyOJb38aMNXGTLaZrCvVq1ACBUd3AO8BmJAPVe09Za2boWsKGc6qSz5HOnV1qjnzZt9W/CItOilLE0qhZFCh02SGVRZdoEixtlz3nhdJdD61avKpbtJSecPh5HWoaTjGCjNbio0xrMTpBMdh0I2FVdh7DbUAhgbXtcE9WRnbtujLjo3slaWXteVw5YzyMkr/ADX6yKwjWPrzo+uimvh3LLmEqUlfZPPssTb05TzFPoppehJxoTwnvabWV4m2WkbaSzJZfqNoeEqlc7WHqgbXJ2dg8gW2SbsLHfkI9ToLeNrVqR8W87/QC0tSS2pmd1V1mGExFVmVmo1yWYLbaRgSVYKTY5MQRe+Q4T0fSDo3O+oU+qx1kEl57DDZ3ypTetuZr8brpo5gHK+NZc1BonaB32DOOSbzydp0Z02s0lmEHv8Aa2eie06FW/tO89rW7YRDr3Qr4V0cOlV6bgrsMVDMCAA+482c1WnRO9o38JpexGSeW+CK62kaUqLXForPBif9Z/4n70no+nWPov8A/cfmczRP2/wZ6vPjSeNx6Ux2nsOtOrZRYEBrcL3Bt2TtWs3Up5e87VnUlOn7XAgh5dg1gcXiNhGbgDHpw1pJCyeFk0epLCrhVqMqlmZ7mw+ixA7LTn6TzTruEXswji3NSUp7S/M5pQJCQiYvF7BA2Sb3zBGVpfSpa6byW06bnuKyo1yTxN5pWxYNqWFgG0YjA1DHQpGqmWohHeWIVkcx0QimsF3y7Ub3FqTe4cmOXgYrpMsVNh00gOBiOixlSZNwuKDbt8pnTcQODiTFlIBwgICc/K0R/uL3x49yfkyur3Gaqcc5p0hDhIQocc1nfr9wnSpLMUdKltgigq6SZqgUZDaHfN8aCjHIW9jRvZ59nMIOncD4/D1aXnqR2ibdGXXZbqnW91piVIa8HHmjwLGYV6TtTcWZTYjuI4gz73a3FO4pxq03mLPLVKcqcnGW9A1E0lbHgRhRQYSDxIKOEgGcDCQfTMjFaHbcAMHpvg00C9JWxNVdlnULTB3hL3LHhtEC3QOmfK+m+mqdeUbOi8qLzJ8M8F8OJ3tF2zgnUlx3G3DZnoy9gPvnz5rCR2QVbCU3N3RWO65HNHjWnBYixozlHcwf6rofVL2Ru1VfeG7RV95mU1y0etJTsZB1bLfYjh2zraOrOo1rb0zfb1pVKclLgWXg9/caf2qn5zM2mPvT8kYK3fNGZzCoaZAlZpXevUfdNdvuZst9zIJMvLwbNGwADUMdIBGqmWpCkd2liABJjkRT4vyvQJsh3TTT4iKZGXB1iMZE/RzcsdRlFVeyLU7pcqZiZQEEUINh8rRPCovfHj3JrwZXV7jNUZxzmnSEOkIZ/SXlv1+4TpUe6jpUe4jKKPlPxe+db+0nM9LnmHvOacICGe1j1Yo4gFmUGwJvuI5zZh3bp3NF6curL2aUsLlvXoV1LelW76POm1VBuUbLacAEncrEDPqE9r9bbiOxxXDh4FkNAUJxUssEdXnG9L/ijrpZW8PQX6u0ub9QZ0Iw/hntvD9aa74x9BXoCl4+oM6Kcfwz7fjD9Z7h8Y+gPoCj4+pcao6tUsU9RXuuwoORO+9pkv8ApZe28FJKLy+RVV0PbwXH1NQfBvh/PbtM5i6eX3uxKPou38fURfBvQ89vbG+vt77kRfoqh4lvorUzCUDtCnttzGodq3Uu6ci/6WaSu4uDnqx5R2fnv/MtpWFCm8pZfjtNDeebe02AsM17/ab2G0epsx5ILDSsAshDLa8rdU6n/pnW0W8N+aN9ksxn/OZ3g3rBsEFG9HcMOBJ2h7DJpmDVxrcGkZay9o05nKKxjwoKKzShzX0+6a6G5mu33MgMZoSLwTNGSAAd46QpFqNLUgAXMdABXjkKjFeX6BNkO6aKfERTIy5BkMRjIm4A8semU1e6wT7pdK0xMzhQYgTnW9rGxBBB4EG4hTwRrKwWaaVNs0F+hsvaMpmdtHgzK7bxOOlm5qY9f/8AMHZo+9+X7g7K+Zy6VbnpgfjJ/pkdtHg36fuTs3iQMZULXJ3maKaxhGuEdVYMxflHrnU/tE4nodLG02AKutiL7xf0jmnnJ0aibWDA4SXAd+mU/rE9YRepqe6/QGpLkR8bpKiKb/KLuO4gndzCW0raq5r2WGNOWdxjsKeSDxufWJPvnZq947tFYgkGMrLBsJDntaRMg7wdr8viepfax+Eml3/Rp/zgce6+Zu558xC3kIdeQghMiIRdEvtJcc7P7TeX3KxPHggy3k2ZxTpCGe1tHzX4/wCmdOw3S+B0dH/3GawtI0nL0XamzeVskWbrUggzpynrxUaiTS5mydvTnvRdYPH4hgSa5y/lp/2zHUpUY7oL1f8A2ZalpTi9hLGKq89Un8KfCUdXT939SvqIDKlQnMm5hSS3Fiio7EAdo6QwJ2jJCsBUaWJCkdzLEACxjgBlo2CFViQdq/VNcO6XweGMQHgeyFlmsg6I3A9kRtcw66J2Bom4Y5SipJYwgSmmsItUaZGioOrRGhh6mLgI8GAgt4CYHCAAOstxGi8BRSYjR5W7X6ZuhWT2CuIXQx+UHp7jFuF7DDn2S8t0TBkhXaeHyR6xNNq/bA9xCwx5C9Uvqd5m2n3UEMQcSAh0JA+oItXxQ+772i6W20afxOReb/ibacEwnSEOhIIZEFFZhcLWpEhCpUm9mv7psnUpVEtZPI7cXvKfS+s2Lo1mpLh6bgBSG2mzuLkTbQsLapSU3Npssp2zmsrcSNA6w4ivV8W9GmnJLX2idxA3fild1Y0KVPXjJvbglW36tZbNBWoK9ttQ1uIvbtnMjOUO6ymM5R7rAnR1H6tewR1Xqe8x+vqe8xraOpAEBQOrjHjXm3tYVXqZ3lOG6Jr2m7AxmEIATtHSIAd46QrAVGliQCO7SxABFoyRBpaEGAAMsLB6mKyBlaK0QMrSthDo8RoIdGlbQQqGKwhQYmCDryBHAwEFEACFpI8ky+j3g8CBoY/KL6e4zRc9xircXpM54cZI+OQOhXiJbSbjJMODO4XGKnIc7JByvOjOk5e1HaWUaqXssmGup3MO0SnUkt6NKkhRUHEQarDlDryYJlBtXVdcSzUrHaQbasbZA2BBANjnw4xbpwlbpVOD2M597GOMs2YqHzfbOJqx5nMwVj6fRSVZHBUkHyTu9M1dik1lNYNULOcoqSwd+0NLzX7B8YOxT5obsFTw/nwO/aGn5j9i/wB0PYZc0DsNTw/nwGNrGnNTf0lR3ExlY85IKsZ8WijxVc1GZjvJv8PZNkIqKSR0qcFCKiiXq1+8/wDif89OV3n3f4r5mK/3I1hnGOYIYSDHORjx3hW8zIadPB1GMdoUgAmeOkAA7R0hQLNLEhQDNGSCDMcA0mQgKOWDgYABFMDIFRojQQqNEaIHR4jQQ6NEaCFVojQQimKyDwYCCiAhD0l5Jl1HvBe4r9Dg+NUDebgdhmmv3HkXOE2bpMKgFtkHpOc4Lqyb3nPdWTe8cKK+avYIvWS5g15cxGwyHei+qPhGjWqLdJ+oNZ8xBhaf1aeqPhD11T3n6kyKaCEWKLbhYW7IOsmnlN+pMsodJ6Dw6srLSVdq4IAsPQBkJ0KF5WlFpy3Gu3k5ZTA6tUQmIqgCw2Vt2x72blQi/EFxwNPOSZTFaTqL46pyhfaNxcTu0Yy6uOzgdq3nHq1tACovEdojOLLtePMXxq+cO0Sakga8eZwqr5w7RBqSBrx5neNXiO2HUkTXjzLHVioDijY3tSb2ukovYtW+3mvmc++kmlg1pnFOcNLQ4ICqNkZZFbQreZgHKdTB1GDdoUhQLvHSAAd5YkKDLRkgAiYxBpMJBt4Q4BCOMKDAEcIABFaK0EKjRWQMjRGiBUeI0EOrxGghFaK0QKGi4IPDRcBIWkn5Jl9FbQvcRNAn5en9oS66+yl5FU+4zezzxzjpCHSEOkIdIHJX6X3L9r3GarbezVbb2VlLaRzUQi5XZIYXBANxuM1NxlDUlu3l9SCnvJS6QrXz8XboDfGVOjSxsz/PgVdmjzBVACSSBmbxk2lguSwsCbA4CTLDkSw4Q5ZMiSZJk6TaQgYjAXqCqjtTcZXXhNEK+IaklleIsoqW8TF18WoUrim8tQbpT3NcebxtHpRt5Np01uzxKnRhlC+Pxg/+RfrRfhF1Lf3PzJ2eAZcZWsQ9TavwAXulbp085jHAypQW1IAXj4HYB3jqIALNLEiAmaNgAy8OBRphINMIRISH/9k=';

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [actionType, setActionType] = useState('');

    const openConfirmationModal = (type) => {
        setActionType(type);
        if (type === 'depositar') {
            setModalMessage('Você está prestes a depositar. A taxa é de 1%. Continuar?');
        } else if (type === 'sacar') {
            setModalMessage('Você está prestes a sacar. A taxa é de 0.5%. Continuar?');
        }
        setShowModal(true);
    };

    const handleConfirm = () => {
        if (actionType === 'depositar') {
            depositar();
        } else if (actionType === 'sacar') {
            sacar();
        }
        setShowModal(false);
    };

    const depositar = () => {
        const valorNumerico = parseFloat(valor);
        if (!isNaN(valorNumerico) && valorNumerico > 0) {
            const novoSaldo = saldo + valorNumerico + valorNumerico * 0.02;
            setSaldo(novoSaldo);
            setValor('');
        }
    };

    const sacar = () => {
        const valorNumerico = parseFloat(valor);
        if (!isNaN(valorNumerico) && valorNumerico > 0) {
            const taxa = valorNumerico * 0.005;
            const novoSaldo = saldo - valorNumerico - taxa;
            if (novoSaldo >= 0) {
                setSaldo(novoSaldo);
                setValor('');
            } else {
                alert('Saldo insuficiente.');
            }
        }
    };

    return (
        <View style={style.container}>
            <View>
                <Image
                    style={style.estiloLogo}
                    source={{ uri: Logoist }}
                />
            </View>
            <View>
                <Text style={style.txtsaldo2}>Seu saldo:</Text>
                <Text style={style.txtsaldo3}>{saldo.toFixed(2)}</Text>
            </View>
            <View>
                <TextInput
                    onChangeText={setValor}
                    value={valor}
                    placeholder='Insira o valor desejado!'
                    keyboardType='numeric'
                    style={style.inputBox}
                />
            </View>
            <View style={style.botoes}>
                <Pressable style={style.botao} onPress={() => openConfirmationModal('depositar')}>
                    <Text style={style.txt}>Deposite</Text>
                </Pressable>
                <Pressable style={style.botao} onPress={() => openConfirmationModal('sacar')}>
                    <Text style={style.txt}>Saque</Text>
                </Pressable>
            </View>
            <Modal
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={style.modalContainer}>
                    <Text style={style.txtmodal2}>{modalMessage}</Text>
                    <View style={style.botoesmodal}>
                        <Pressable style={style.botaomodal} onPress={handleConfirm}>
                            <Text style={style.txt}>Confirmar</Text>
                        </Pressable>
                        <Pressable style={style.botaomodal} onPress={() => setShowModal(false)}>
                            <Text style={style.txt}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
