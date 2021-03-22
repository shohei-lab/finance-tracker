import styles from "./Coins.module.css";
import Link from'next/link'

function Coins({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={image} alt={image} className={styles.coin_img} />
          <h1 className={styles.coin__h1}>{name}</h1>
          <p className={styles.coin__symbol}>{symbol}</p>
        </div>
        <div className={styles.coin__data}>
          <p className={styles.coin__price}>{price}円</p>
          <p className={styles.volume}>{volume.toLocaleString()}円</p>

          {priceChange < 0 ? (
            <p className={(styles.coin__percent, styles.red)}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className={(styles.coin__percent, styles.green)}>
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className={styles.coin__marketcap}>
            Mkt Cap: {marketcap.toLocaleString()}円
          </p>
        </div>
      </div>
    </div>
    </a>
    </Link>
  );
}

export default Coins;
