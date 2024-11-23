<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Registration Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9f9f9;
        }
        .form-container {
            width: 100%;
            max-width: 500px;
            background: #fff;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .form-group input, 
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .form-group.hidden {
            display: none;
        }
        .form-group.radio-buttons {
            display: flex;
            gap: 10px;
        }
        .form-group.radio-buttons input {
            width: auto;
        }
        .submit-button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .submit-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <form id="registrationForm">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required>
            </div>
            <div class="form-group">
                <label>Preferred Contact Method</label>
                <div class="radio-buttons">
                    <label><input type="radio" name="contactMethod" value="email" required> Email</label>
                    <label><input type="radio" name="contactMethod" value="phone"> Phone</label>
                    <label><input type="radio" name="contactMethod" value="mail"> Mail</label>
                </div>
            </div>
            <div class="form-group hidden" id="emailField">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address">
            </div>
            <div class="form-group hidden" id="phoneField">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
            </div>
            <div class="form-group hidden" id="mailField">
                <label for="street">Street Address</label>
                <input type="text" id="street" name="street" placeholder="Enter your street address">
                <label for="city">City</label>
                <input type="text" id="city" name="city" placeholder="Enter your city">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="Enter your state">
                <label for="zip">ZIP Code</label>
                <input type="text" id="zip" name="zip" placeholder="Enter your ZIP code">
            </div>
            <button type="submit" class="submit-button">Submit</button>
        </form>
    </div>

    <script>
        const contactMethodRadios = document.querySelectorAll('input[name="contactMethod"]');
        const emailField = document.getElementById('emailField');
        const phoneField = document.getElementById('phoneField');
        const mailField = document.getElementById('mailField');

        contactMethodRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                emailField.classList.add('hidden');
                phoneField.classList.add('hidden');
                mailField.classList.add('hidden');

                if (radio.value === 'email') {
                    emailField.classList.remove('hidden');
                } else if (radio.value === 'phone') {
                    phoneField.classList.remove('hidden');
                } else if (radio.value === 'mail') {
                    mailField.classList.remove('hidden');
                }
            });
        });
    </script>
</body>
</html>
