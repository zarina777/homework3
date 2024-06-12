import clsx from 'clsx'
import cn from './style.module.scss'
import { P } from '../Typography'
function Button(props) {
    const {icon, children, type = 'simple' } = props
    return (
        <button  className={clsx(cn.Button, type == 'link' ? cn.Link_Button : type == 'simple' ? cn.Simple_Button : '')} >
          {icon?<i className={icon}></i>:''}  <P color={type == 'link' ? '#A259FF' : 'rgba(255, 255, 255, 1)'}>{children}</P>
        </button>
    )
}

export default Button