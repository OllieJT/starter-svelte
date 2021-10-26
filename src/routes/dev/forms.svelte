<section>
	<h3>Form Fun</h3>
	<p>
		Intearctive forms in HTML initially solely powered posting data to server-side programs.
		Today forms are used to power complex client side applications written in JavaScript.
		Much of the markup complexity is found with the <a
			href="https://html.spec.whatwg.org/multipage/input.html"
			><code>input</code> element</a
		>
		which does many things. However, other
		<a href="https://html.spec.whatwg.org/multipage/form-elements.html">form elements</a>
		can be quite complex themselves. Before moving on to JavaScript make sure you fully understand
		all the
		<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html"
			>details around form controls</a
		> otherwise you will have gaps in your knowlege and may run into trouble or do needless scripting
		when you could just use platform provided features directly.
	</p>
	<form
		action="http://httpbin.org/post"
		oninput="x.value=parseInt(mileage.value)"
		method="POST"
		name="registration"
	>
		<!-- hidden form fields don't show on screen and are often used for control information, they are inherently like all HTML elements modifable so be cautious in what you store in them -->
		<input type="hidden" name="formId" value="somenottrulyhiddenvalue" />
		<fieldset>
			<legend> Personal Information </legend>
			<label for="name"> Name: </label>
			<input type="text" name="name" id="name" autofocus />
			<br />
			<label> Gender: </label>
			<label for="male"> Male </label>
			<input type="radio" name="gender" id="male" value="male" checked />
			<label for="female"> Female </label>
			<input type="radio" name="gender" id="female" value="female" />
			<label for="other"> Other </label>
			<input type="radio" name="gender" id="other" value="other" />
			<br />
			<label for="birth"> Date of birth: </label>
			<input type="date" name="birth" id="birth" />
			<br />
			<label for="phone"> Phone number: </label>
			<input type="tel" name="phone" id="phone" autocomplete="on" />
			<br />
			<label for="email"> Email: </label>
			<input type="email" name="email" id="email" autocomplete="on" required />
			<br />
			<label for="password"> Create password: </label>
			<input type="password" name="password" id="password" autocomplete="on" />
			<br />
			<label for="ssn"> SSN: </label>
			<input type="number" name="ssn" id="ssn" />
			<br />
			<label for="address"> Address: </label>
			<input type="text" name="address" id="address" autocomplete="on" />
			<label for="zip"> Zip code: </label>
			<input
				type="text"
				name="zip"
				id="zip"
				pattern="[0-9]*"
				maxlength="5"
				autocomplete="on"
			/>
			<label for="state"> State: </label>
			<input type="text" name="state" id="state" autocomplete="on" />
		</fieldset>
		<br />
		<fieldset>
			<legend> Car Information </legend>
			<label for="make"> Make: </label>
			<select name="make" id="make">
				<optgroup label="Swedish Cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
				</optgroup>
				<optgroup label="German Cars">
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</optgroup>
			</select>
			<br />
			<label for="category"> Category: </label>
			<input list="car-categories" name="category" id="category" />
			<datalist id="car-categories">
				<option value="Gas" />
				<option value="Electrical" />
				<option value="Hybird" />
				<option value="Diesel" />
			</datalist>
			<br />
			<label for="type"> Type: </label>
			<input list="car-types" name="type" id="type" />
			<datalist id="car-types">
				<option value="Hatchback" />
				<option value="Sedan" />
				<option value="SUV" />
				<option value="Crossover" />
				<option value="Coupe" />
				<option value="Convertible" />
			</datalist>
			<br />
			<label for="color"> Color: </label>
			<input type="color" name="color" id="color" />
			<br />
			<label for="year"> Year built: </label>
			<input type="number" name="year" id="year" />
			<br />
			<label for="purchase"> Purchase year and month: </label>
			<input type="month" name="purchase" id="purchase" />
			<br />
			<label for="plate"> Plate number: </label>
			<input type="text" name="plate" id="plate" />
			<br />
			<label for="isOperational"> Is this vehicle under planned non operation? </label>
			<input type="checkbox" name="isOperational" id="isOperational" />
			Yes
			<br />
			<label for="mileage"> Current Milage: </label>
			0<input
				type="range"
				name="milage"
				id="mileage"
				step="250"
				value="0"
				min="0"
				max="100000"
			/>100000 <output name="x" for="mileage" />
			<br />
			<label for="photo"> Upload a photo of the car: </label>
			<input type="file" name="photo" id="photo" />
			<br />
			<label for="accessories"> Which accessories does your car have? </label><br />
			<select name="accessories" id="accessories" multiple>
				<option value="blanket">Blanket</option>
				<option value="cover">Car Cover</option>
				<option value="toolkit">Comprehensive Tool Kit</option>
				<option value="freshener">Air Freshener</option>
				<option value="aidkit">First Aid Kit</option>
				<option value="lock">Steering Wheel Lock</option>
			</select>
		</fieldset>
		<br />
		<fieldset>
			<legend> Shipping Information </legend>
			<label for="shippingWeek"> When do you want to receive your registration: </label>
			<input type="week" name="shippingWeek" id="shippingWeek" />
		</fieldset>
		<br />
		<fieldset>
			<legend> Registrar Information (read only &amp; disabled)</legend>
			<label for="registrar"> Registrar: </label>
			<input
				readonly
				type="text"
				value="Fake Car Registration Company"
				name="registrar"
				id="registrar"
			/>
			<br />
			<label for="date"> Form publish date: </label>
			<input
				readonly
				type="datetime-local"
				value="2019-12-20T19:30"
				name="date"
				id="date"
			/>
			<br />
			<label for="formVersion"> Form version: (Disabled) </label>
			<input type="text" value="v1.3" name="formVersion" id="formVersion" disabled />
		</fieldset>
		<br />
		<label for="comment"> Add comments: </label><br />
		<textarea
			rows="4"
			cols="50"
			id="comment"
			name="comment"
			placeholder="Please add your comments here"
		/>
		<br />
		<br />
		<button type="reset">
			Reset Form <img src="./images/reset_button.png" width="20" alt="reset" /></button
		>
		<button type="submit">
			Submit Form <img src="./images/submit_button.png" width="20" alt="submit" /></button
		>
		<button type="button" onclick="alert('clicked')"> Generic Button</button>
		<br />
		<br />
		<h4>Alternate Form of Button</h4>
		<input type="reset" value="Reset Form" />
		<input type="submit" value="Submit Form" />
		<input type="button" value="Generic Button" onclick="alert('clicked!');" />
	</form>
</section>
