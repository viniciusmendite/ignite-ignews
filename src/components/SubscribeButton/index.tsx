import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';
import { Session } from 'next-auth';

interface ISession extends Session {
  activeSubscription: boolean;
}

export function SubscribeButton() {
  const [session] = useSession() as [ISession | null | undefined, boolean];
  const { push } = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn('github');
      return;
    }

    if (session.activeSubscription) {
      push('/posts');
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}