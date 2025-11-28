import { Schema } from 'mongoose';
import Stripe from 'stripe';

export interface OrderType {
  _id: string;
  cardBackType?: string;
  roomBackground?: string;
  diamond?: string;
  subscription?: string;
  paymentMethod: string;
  paymentResult: PaymentResultType;
  taxPrice: number;
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: Schema.Types.ObjectId;
}

type PaymentResultType = {
  id: string;
  status: Stripe.PaymentIntent.Status | Stripe.Subscription.Status;
  update_time: string;
  email_address: string;
};
