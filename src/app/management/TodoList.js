const TodoList = () => {
    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>Name</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/*row 1 */}
            <tr>
              <td>Cy Gardenton</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TodoList;