{
  /* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Users" element={<Users />}>
          <Route path="Login" element={<Loginn />}></Route>
          <Route path="SigUp" element={<SigUp />}></Route>
        </Route>

        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter> */
}
<BrowserRouter>
  <FNav />
  <Routes>
    <Route path="/" element={<LogIN />} />
    <Route path="/Navsingup" element={<SingIN />} />
    <Route
      path="/product"
      element={
        <RequireAuth>
          <Product />
        </RequireAuth>
      }
    />
  </Routes>
  <Footer />
</BrowserRouter>;
{
  /* <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/HTML" element={<HtML />}>
          <Route path="Tutorial" element={<Tutorial />}></Route>
          <Route path="Introduction" element={<Introduction />}></Route>
          <Route path="Editors" element={<Editors />}></Route>
        </Route>
        <Route path="/CSS" element={<CSs />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter> */
}
