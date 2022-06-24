import Card from "../Card/Card";

export default function Client(){
    return (
        <div className={"container-fluid mt-5"}>

            <div className={"jumbotron d-flex mt-1"} id={"service"}>
                <div className={"col-6"}>
                </div>
                <form className={"col-6"}>
                    <Card
                          header={"Booking Form"}
                          body={
                              <div>
                                  <form>
                                    <select className="select">
                                      <option>Antananarivo</option>
                                    </select>
                                  </form>
                              </div>
                          }
                          footer={
                            <>
                                <button type={"submit"} className={"btn-success mr-5"}>Book</button>
                                <button type={"reset"} className={"btn-danger"}>Cancel</button>
                            </>
                          }
                    />
                </form>
            </div>
            <div className={"jumbotron d-flex"}>
                <Card size={3}
                      header={"Voyage du jours"}
                      body={<p>
                        Antananarivo - Antsirabe <br/>

                        09 heures - 10 heures <br/>

                        Fianarantsoa - Antananarivo <br/>

                        16 heures - 19 heures
                      </p>}
                />

                <Card size={6}
                      header={"A venir"}
                      body={
                        <p>
                        Diego - Antananarivo <br/>

                        08 heures - 12 heures <br/>

                        Morondava - Toamasina <br/>

                        10 heures - 13 heures
                      </p>
                      }
                />

                <Card size={3}
                      header={"Most visited sites"}
                      body={<p><br/>
                        Cotisse Transport Madagascar
                      </p>}
                />
            </div>
            {/*just make sure that size sum <=12*/}
            <div className={"jumbotron d-flex"}>
                <Card size={4}
                      header={"Nos Destinations"}
                      body={
                        <p>
                            Antananarivo - Toamasina <br/><br/><br/>

                            Antananarivo - Mahajanga <br/><br/><br/>

                            Antananarivo - Diego
                        </p>
                      }
                />

                <Card size={4}
                      header={"Nos offres"}
                      body={<p>
                        Prémium <br/>
                        Lite <br/><br/>
                        Prémium <br/>
                        Lite<br/><br/>
                        Prémium <br/>
                        Lite
                      </p>}
                />

                <Card size={4}
                      header={"Nos Tarifs"}
                      body={<p>
                        15 000 Ar <br/>
                        20 000 Ar <br/><br/>
                        40 000 Ar <br/>
                        50 000 Ar <br/><br/>
                        35 000 Ar <br/>
                        45 000 Ar
                      </p>}
                      footer={""}
                />
            </div>
        </div>
    );
}