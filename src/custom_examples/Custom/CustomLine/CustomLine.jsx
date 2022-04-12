import classnames from 'classnames';
import s from './CustomLine.module.scss';

const CustomLine = ({
  children, className, text, ...props
}) => {
  const { onClick } = props;
  return (
    <div className={classnames(s.root, { [className]: className })} {...props}>
      {/* <img style={{ width: '10%' }} /> */}
      <p style={{ width: '2%', color: 'gray', cursor: 'pointer' }} onClick={onClick}>{'>'}</p>
      <p style={{ width: '6%', color: 'gray' }} >{text}</p>
      <div style={{ width: '92%', height: '3px', backgroundColor: 'gray' }} />
    </div>
  );
};

export default CustomLine;
