import csv
import datetime

def display_menu():
    print("Expense Tracker Menu")
    print("--------------------")
    print("1. Add Expense")
    print("2. View Expenses")
    print("3. Generate Report")
    print("4. Exit")

def add_expense():
    expense_date = input("Enter expense date (YYYY-MM-DD): ")
    expense_category = input("Enter expense category: ")
    expense_description = input("Enter expense description: ")
    expense_amount = input("Enter expense amount: ")

    with open("expenses.csv", mode="a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([expense_date, expense_category, expense_description, expense_amount])
    print("Expense added successfully!")

def view_expenses():
    with open("expenses.csv", mode="r") as file:
        reader = csv.reader(file)
        for row in reader:
            print(row)

def generate_report():
    with open("expenses.csv", mode="r") as file:
        reader = csv.reader(file)
        expenses = list(reader)

    total_expenses = 0
    categories = {}

    for expense in expenses:
        total_expenses += float(expense[3])
        category = expense[1]
        if category in categories:
            categories[category] += float(expense[3])
        else:
            categories[category] = float(expense[3])

    print("Expense Report")
    print("--------------")
    print("Total Expenses: $", total_expenses)

    for category, amount in categories.items():
        print(category, ": $", amount)

def main():
    while True:
        display_menu()
        choice = input("Enter your choice (1-4): ")

        if choice == "1":
            add_expense()
        elif choice == "2":
            view_expenses()
        elif choice == "3":
            generate_report()
        elif choice == "4":
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
