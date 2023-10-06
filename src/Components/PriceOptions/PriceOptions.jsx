import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
   const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to cardio and strength training equipment",
        "Locker room access",
        "One complimentary fitness assessment",
        "Unlimited access during off-peak hours",
        "Access to online workout videos",
        "Discounts on gym merchandise"
      ],
      "price": 29.99
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "features": [
        "Access to all gym facilities 24/7",
        "Personal training sessions (2 sessions/month)",
        "Group fitness classes (unlimited)",
        "Towel service",
        "Sauna and steam room access",
        "Nutritional counseling sessions",
        "Priority booking for classes"
      ],
      "price": 59.99
    },
    {
      "id": 3,
      "name": "Platinum Membership",
      "features": [
        "Access for two adults and two children",
        "Family-friendly fitness classes (for children)",
        "Childcare services during workouts",
        "Access to indoor swimming pool",
        "Discounts on additional personal training sessions",
        "Monthly family fitness challenges",
        "Free family guest passes"
      ],
      "price": 89.99
    }
  ]

    return (
        <div className="m-12">
            <h1 className="text-5xl">Best Prices in the Town</h1>
            <div  className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;