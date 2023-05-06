import styles from '@/styles/Cart.module.scss'
import { Cart } from './types'
import formatAuthor from '@/utils/formatAuthor'
import formatAvRate from '@/utils/formatAvRate'
export default function Cart({ books }: Cart) {
  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shopping cart</h2>
        <ul className={styles.fields}>
          <li>item</li>
          <li>quantity</li>
          <li>price</li>
          <li>delivery</li>
        </ul>
        <ul className={styles.cartList}>
          {/* {books.map((book) => (
            
          ))} */}
          <li>
            <div className={styles.book}>
              <div
                style={{
                  backgroundImage: `url(/img/placeholderImg.png)`,
                }}
                className={styles.cover}
              ></div>
              <div className={styles.descr}>
                <h2 className={styles.title}>The weight of things</h2>
                <p className={styles.author}>
                  {formatAuthor(['Marianne Fritz'])}
                </p>
                <div className={styles.rate}>
                  {formatAvRate(5)}
                  <span>{5} reviews</span>
                </div>
              </div>
            </div>
            <div className={styles.quantity}>
              <div className={styles.counter}>
                <button>
                  <svg
                    width="22"
                    height="5"
                    viewBox="0 0 22 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2143 2.5C21.2143 3.36426 20.512 4.0625 19.6428 4.0625H2.35713C1.48794 4.0625 0.785706 3.36426 0.785706 2.5C0.785706 1.63574 1.48794 0.9375 2.35713 0.9375H19.6428C20.512 0.9375 21.2143 1.63574 21.2143 2.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <span>0</span>
                <button>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1.75C9 0.920312 9.67031 0.25 10.5 0.25C11.3297 0.25 12 0.920312 12 1.75V8.5H18.75C19.5797 8.5 20.25 9.17031 20.25 10C20.25 10.8297 19.5797 11.5 18.75 11.5H12V18.25C12 19.0797 11.3297 19.75 10.5 19.75C9.67031 19.75 9 19.0797 9 18.25V11.5H2.25C1.42031 11.5 0.75 10.8297 0.75 10C0.75 9.17031 1.42031 8.5 2.25 8.5H9V1.75Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.price}>18.23</div>
            <div className={styles.delivery}>Shipping: delivery</div>
          </li>
        </ul>
        <div className={styles.total}>Total price: 30.58</div>
        <button className={styles.checkout}>checkout</button>
      </div>
    </div>
  )
}