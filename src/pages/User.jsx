import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Spinner from "../components/layout/Spinner"
import GithubContext from "../context/github/GithubContext"

import React from "react"

const User = () => {
  const params = useParams()
  const { getUser, user } = useContext(GithubContext)
  useEffect(() => {
    getUser(params.login)
  }, [])

  return <div>{user.login}</div>
}

export default User
