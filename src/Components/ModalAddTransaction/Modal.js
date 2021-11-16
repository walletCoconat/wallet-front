import React from 'react';
import style from './Modal.module.scss';
import sprite from '../../images/sprite.svg';

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'style.ModalActive' : 'style.Modal'}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className={style.ModalContent} onClick={e => e.stopPropagation()}>
        <button className={style.BtnClose}>
          <svg>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </button>

        <h2>Add Transaction</h2>

        <form>
          <div className={style.SwitchBox}>
            <label for="income" className={style.Text}>
              Доход
            </label>
            <label className={style.Switch}>
              <input type="checkbox" />
              <span className={style.SliderRound}></span>
            </label>
            <label for="spend" className={style.Text}>
              Расход
            </label>
          </div>
          <button type="submit" className={style.Button}>
            Добавить
          </button>
          <button type="submit" className={style.Button}>
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

// интерфейс для пропсов
// interface ModalProps {
//     visible: boolean
//     title: string
//     content: ReactElement | string
//     footer: ReactElement | string
//     onClose: () => void
// }

// const Modal = ({
//                    visible = false,
//                    title = '',
//                    content = '',
//                    footer = '',
//                    onClose,
//                }: ModalProps) => {

//     // создаем обработчик нажатия клавиши Esc
//     const onKeydown = ({key}: KeyboardEvent) => {
//         switch (key) {
//             case 'Escape':
//                 onClose()
//                 break
//         }
//     }

// c помощью useEffect цепляем обработчик к нажатию клавиш
// https://ru.reactjs.org/docs/hooks-effect.html
// React.useEffect(() => {
//     document.addEventListener('keydown', onKeydown)
//     return () => document.removeEventListener('keydown', onKeydown)
// })

// если компонент невидим, то не отображаем его
// if (!visible) return null;

// или возвращаем верстку модального окна
//     return <div className="modal" onClick={onClose}>
//         <div className="modal-dialog" onClick={e => e.stopPropagation()}>
//             <div className="modal-header">
//                 <h3 className="modal-title">{title}</h3>
//                 <span className="modal-close" onClick={onClose}>
//             &times;
//           </span>
//             </div>
//             <div className="modal-body">
//                 <div className="modal-content">{content}</div>
//             </div>
//             {footer && <div className="modal-footer">{footer}</div>}
//         </div>
//     </div>
// }

// const App = () => {
//     const [isModal, setModal] = React.useState(false)
//     const onClose = () => setModal(false)
//     return (
//         <React.Fragment>
//             <button onClick={() => setModal(true)}>Клик-клик-клик</button>
//             <Modal
//                 visible={isModal}
//                 title="Заголовок"
//                 content={<p>Что-то важное</p>}
//                 footer={<button onClick={onClose}>Закрыть</button>}
//                 onClose={onClose}
//             />
//         </React.Fragment>
//     );
// };
