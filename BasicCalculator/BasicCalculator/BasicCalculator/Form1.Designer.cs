namespace BasicCalculator
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.add = new System.Windows.Forms.Button();
            this.textBoxInput1 = new System.Windows.Forms.TextBox();
            this.textBoxInput2 = new System.Windows.Forms.TextBox();
            this.divide = new System.Windows.Forms.Button();
            this.multiply = new System.Windows.Forms.Button();
            this.substract = new System.Windows.Forms.Button();
            this.button5 = new System.Windows.Forms.Button();
            this.textBoxOutput = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // add
            // 
            this.add.Location = new System.Drawing.Point(111, 73);
            this.add.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.add.Name = "add";
            this.add.Size = new System.Drawing.Size(131, 20);
            this.add.TabIndex = 0;
            this.add.Text = "Addition";
            this.add.UseVisualStyleBackColor = true;
            this.add.Click += new System.EventHandler(this.add_Click);
            // 
            // textBoxInput1
            // 
            this.textBoxInput1.Location = new System.Drawing.Point(111, 42);
            this.textBoxInput1.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.textBoxInput1.Name = "textBoxInput1";
            this.textBoxInput1.Size = new System.Drawing.Size(131, 20);
            this.textBoxInput1.TabIndex = 1;
            // 
            // textBoxInput2
            // 
            this.textBoxInput2.Location = new System.Drawing.Point(269, 42);
            this.textBoxInput2.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.textBoxInput2.Name = "textBoxInput2";
            this.textBoxInput2.Size = new System.Drawing.Size(130, 20);
            this.textBoxInput2.TabIndex = 2;
            // 
            // divide
            // 
            this.divide.Location = new System.Drawing.Point(269, 111);
            this.divide.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.divide.Name = "divide";
            this.divide.Size = new System.Drawing.Size(130, 20);
            this.divide.TabIndex = 3;
            this.divide.Text = "Division";
            this.divide.UseVisualStyleBackColor = true;
            this.divide.Click += new System.EventHandler(this.divide_Click);
            // 
            // multiply
            // 
            this.multiply.Location = new System.Drawing.Point(111, 111);
            this.multiply.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.multiply.Name = "multiply";
            this.multiply.Size = new System.Drawing.Size(131, 20);
            this.multiply.TabIndex = 4;
            this.multiply.Text = "Multiplication";
            this.multiply.UseVisualStyleBackColor = true;
            this.multiply.Click += new System.EventHandler(this.multiply_Click);
            // 
            // substract
            // 
            this.substract.Location = new System.Drawing.Point(269, 73);
            this.substract.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.substract.Name = "substract";
            this.substract.Size = new System.Drawing.Size(130, 20);
            this.substract.TabIndex = 5;
            this.substract.Text = "Subtraction";
            this.substract.UseVisualStyleBackColor = true;
            this.substract.Click += new System.EventHandler(this.subtract_Click);
            // 
            // button5
            // 
            this.button5.Location = new System.Drawing.Point(111, 196);
            this.button5.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(288, 20);
            this.button5.TabIndex = 6;
            this.button5.Text = "Clear";
            this.button5.UseVisualStyleBackColor = true;
            this.button5.Click += new System.EventHandler(this.clear_Click);
            // 
            // textBoxOutput
            // 
            this.textBoxOutput.Location = new System.Drawing.Point(110, 156);
            this.textBoxOutput.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.textBoxOutput.Name = "textBoxOutput";
            this.textBoxOutput.Size = new System.Drawing.Size(289, 20);
            this.textBoxOutput.TabIndex = 7;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(533, 292);
            this.Controls.Add(this.textBoxOutput);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.substract);
            this.Controls.Add(this.multiply);
            this.Controls.Add(this.divide);
            this.Controls.Add(this.textBoxInput2);
            this.Controls.Add(this.textBoxInput1);
            this.Controls.Add(this.add);
            this.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button add;
        private System.Windows.Forms.TextBox textBoxInput1;
        private System.Windows.Forms.TextBox textBoxInput2;
        private System.Windows.Forms.Button divide;
        private System.Windows.Forms.Button multiply;
        private System.Windows.Forms.Button substract;
        private System.Windows.Forms.Button button5;
        private System.Windows.Forms.TextBox textBoxOutput;
    }
}

