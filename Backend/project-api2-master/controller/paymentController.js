const stripe=require('stripe')(process.env.STRIPE_SECRETE_KEY)

// process payment
exports.processPayment=async(req,res)=>{
    const paymentIntent=await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:'npr',
        metadata:{integration_check:'accept_a_payment'}
    })
    res.json({client_secret:paymentIntent.client_secret})
}

// send stripe API key to frontend
exports.sendStripeApi=(req,res)=>{
    res.json({stripeApiKey:process.env.STRIPE_API_KEY})
}