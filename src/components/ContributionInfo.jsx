const ContributionInfo = () => {

    return(
        <div className="contributionInfo">
            <div className="contribution">
                <div className="contributionDate">
                  <p>No contributions</p>
                </div>
            </div>
            <div className="contribution more0">
                <div className="contributionDate">
                  <p>1 - 9 contributions</p>
                </div>
            </div>
            <div className="contribution more10">
                <div className="contributionDate">
                  <p>10 - 20 contributions</p>
                </div>
            </div>
            <div className="contribution more20">
                <div className="contributionDate">
                  <p>20 - 30 contributions</p>
                </div>
            </div>
            <div className="contribution more30">
                <div className="contributionDate">
                  <p>+30 contributions</p>
                </div>
            </div>
        </div>
    )
}

export default ContributionInfo;