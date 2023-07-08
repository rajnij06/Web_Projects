using System;
using System.Windows.Forms;

namespace BasicCalculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void add_Click(object sender, EventArgs e)
        {
            operation("add");
        }

        private void subtract_Click(object sender, EventArgs e)
        {
            operation("subtract");
        }

        private void multiply_Click(object sender, EventArgs e)
        {
            operation("multiply");
        }

        private void divide_Click(object sender, EventArgs e)
        {
            operation("divide");
        }
        private void operation(string sender)
        {
            try
            {
                decimal number1 = Convert.ToDecimal(textBoxInput1.Text);
                decimal number2 = Convert.ToDecimal(textBoxInput2.Text);
                decimal result = 0;
                switch (sender)
                {
                    case "add":
                        result = number1 + number2;
                        break;

                    case "subtract":
                        result = number1 - number2;
                        break;

                    case "multiply":
                        result = number1 * number2;
                        break;

                    case "divide":
                        result = number1 / number2;
                        break;
                }
                textBoxOutput.Text = result.ToString("0.00");
            }
            catch (FormatException)
            {
                textBoxOutput.Text = "Invalid input. Please enter valid numbers.";
            }
            catch (DivideByZeroException)
            {
                textBoxOutput.Text = "Cannot divide by zero. Please enter a non-zero value.";
            }
            catch (Exception ex)
            {
                textBoxOutput.Text = "An error occurred: " + ex.Message;
            }
        }

        private void clear_Click(object sender, EventArgs e)
        {
            textBoxInput1.Text = "";
            textBoxInput2.Text = "";
            textBoxOutput.Text = "";
        }
    }
}
