// package com.taxi;

// import static org.assertj.core.api.Assertions.assertThat;
// import static org.hamcrest.CoreMatchers.is;
// import static org.junit.Assert.assertThat;

// import org.junit.jupiter.api.Test;
// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.WebElement;
// import org.openqa.selenium.chrome.ChromeDriver;

// class SeleniumForTaxi {

// 	WebDriver driver = new ChromeDriver();

// 	@Test
// 	void TC_CabView_001() throws InterruptedException {
// 		driver.get("http://localhost:3000/cabhome");
// 		Thread.sleep(5000);

// 		driver.manage().window().maximize();
// 		Thread.sleep(5000);

// 		String title = driver.getTitle();
// 		System.out.println(title);
// 		if (title.equals("Online Taxi Booking System")) {
// 			System.out.println("Matched");
// 		} else {
// 			System.out.println("Does not match");
// 		}

// 		driver.findElement(By.id("search")).sendKeys("Neyveli");
// 		Thread.sleep(5000);

// 		driver.findElement(By.id("search1")).sendKeys("Cuddalore");
// 		Thread.sleep(5000);

// 		boolean viewButton = driver.findElement(By.name("view")).isEnabled();
// 		System.out.println(viewButton);

// 		driver.findElement(By.id("paybut")).click();
// 		Thread.sleep(5000);
		

		
// 	}
	
	
// 	@Test
// 	void TC_CabView_002()throws InterruptedException {
// 		driver.get("http://localhost:3000/cabhome");
// 		driver.manage().window().maximize();
// 		Thread.sleep(500);
// 		driver.findElement(By.name("view")).click();
// 	}

// 	@Test
// 	void testAddBooking() throws InterruptedException {


// 		driver.get("http://localhost:3000/cabhome");
// 		driver.manage().window().maximize();
// 		Thread.sleep(500);
// 		driver.findElement(By.linkText("Book")).click();
// 		Thread.sleep(500);

// 		driver.findElement(By.name("pickupLocation")).sendKeys("Tenkasi");
// 		Thread.sleep(500);

// 		driver.findElement(By.name("dropLocation")).sendKeys("Chennai");
// 		Thread.sleep(500);

// 		driver.findElement(By.name("bookingStatus")).sendKeys("Booked");
// 		Thread.sleep(500);

// 		driver.findElement(By.name("customerId")).sendKeys("2");
// 		Thread.sleep(500);
// 		{
// 			WebElement dropdown = driver.findElement(By.name("customerId"));
// 			dropdown.findElement(By.xpath("//option[. = '1']")).click();
// 		}
// 	    Thread.sleep(7000);
// 		driver.findElement(By.name("add")).click();
// 	   	 assertThat(driver.switchTo().alert().getText(), is("Data added successfully"));
// 	}

// 	@Test
// 	void searchBooking() {
// 		driver.get("http://localhost:3000/");
// 		driver.manage().window().maximize();
// 		driver.findElement(By.id("search")).sendKeys("5");
		
		
// 	}
	
// 	@Test
// 	void searchCustomer() {
// 		driver.get("http://localhost:3000/custhome");
// 		driver.manage().window().maximize();
// 		driver.findElement(By.id("search")).sendKeys("1");
		
		
// 	}
	
	
// }
