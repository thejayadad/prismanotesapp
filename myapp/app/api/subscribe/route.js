import Stripe from "stripe";
import getCorsHeaders from "@/lib/apiCors";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res){
try {
    const { name, email, paymentMethod } = req.body;
    const customer = await stripe.customers.create({
        email,
        name,
        payment_method: paymentMethod,
        invoice_settings: { default_payment_method: paymentMethod },
      });
          // Create a product
    const product = await stripe.products.create({
        name: "Monthly subscription",
      });
      
         // Create a subscription
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price_data: {
              currency: "usd",
              product: product.id,
              unit_amount: "100",
              recurring: {
                interval: "month",
              },
            },
          },
        ],
  
        payment_settings: {
          payment_method_types: ["card"],
          save_default_payment_method: "on_subscription",
        },
        expand: ["latest_invoice.payment_intent"],
      });

    return new Response(JSON.stringify(session), { status: 200, message: "Subscription successfully initiated", 
    clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    headers: getCorsHeaders(req.headers.get("origin") || "") })
} catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 })

}
}