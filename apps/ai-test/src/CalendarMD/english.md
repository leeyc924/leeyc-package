# Creating a Calendar Component

We will create a Calendar component using React and TypeScript.
Refer to the Calendar.png file for the UI, and do not import the image.
Please implement all the logic.

## Component Structure

1. The component file name should be `index.tsx`.
2. Place the component file in the `src/CalendarMD` folder.
3. Use the `dayjs` library for date-related modules.
4. The header part of the calendar should display the year and month.

   - Implement logic to navigate to the previous and next months by clicking the left and right arrow icons, respectively.
     - For example, moving from April to March should display the dates for March.

5. The date cell logic is as follows:

   - Display a maximum of 5 rows of date cells.
   - Dates should include those from the previous and next months. Dates from the previous and next months must be displayed with disabled styling.
   - Allow two dates to be selected and manage them using `useState`.
   - Create logic to change the color of all dates between the two selected dates.
     - For example, if the 14th and 21st are selected, all dates from the 14th to the 21st should have their colors changed, regardless of the selection order.

6. Add `aria` attributes:

   - Add the `aria-label` attribute to buttons.
   - Add the `aria-selected` attribute to selected dates.

7. Comply with web standard tags:

   - Use `button` tags with click events.

8. Add keyboard events:

   - The `Tab` key should move to the next focusable element.
   - When a date is focused, pressing the arrow keys should move focus to the corresponding date.
   - Pressing the `Up` arrow key on the first row should move focus to the last focusable row.
   - Pressing the `Down` arrow key on the last row should move focus to the first focusable row.
   - Pressing the `Left` arrow key on the first column should move focus to the last column.
   - Pressing the `Right` arrow key on the last column should move focus to the first column.
   - Pressing the `Left` arrow key on the first day should move focus to the last day.
   - Pressing the `Right` arrow key on the last day should move focus to the first day.

9. Date cell color information:

   - The first and last dates should have `backgroundColor: primary500`, `color: white`.
   - Dates between the first and last dates should have `backgroundColor: primary100`, `color: white`.
   - Disabled dates should have `backgroundColor: disabled`, `color: gray300`.
   - All other dates should have `backgroundColor: white`, `color: black`.

## CSS Structure

1. Write styles using `vanilla-extract/css`.
2. The style file name should be `index.css.ts`.
3. Palette color information:
   - `primary500`: `#006879`
   - `primary100`: `#A9EDFF`
   - `disabled`: `#ddd`
   - `gray300`: `#aaa`
4. Manage palette as variables.

## Considerations

1. Ensure there are no type errors.
