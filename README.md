# Next.js 15 App Router: Race Conditions and Stale Data in getServerSideProps

This repository demonstrates a common issue in Next.js 15's App Router related to race conditions and stale data when using `getServerSideProps` or other data fetching methods with concurrent rendering.  The bug arises from asynchronous operations not completing before client-side interactions alter the state. The solution introduces techniques to handle asynchronous actions gracefully, preventing stale data display.

## Bug

The `staleDataBug.js` file showcases the problem where a slow `getServerSideProps` fetch can be overtaken by a client-side action, resulting in stale data being rendered. The `getServerSideProps` function simulates a delayed API call.

## Solution

The `staleDataSolution.js` file provides a solution using data loading states and promises to handle the asynchronous nature of `getServerSideProps` and prevent the display of stale data.  A loading indicator is shown while data is fetched and only updates the UI once the data is available.  It also implements proper error handling.