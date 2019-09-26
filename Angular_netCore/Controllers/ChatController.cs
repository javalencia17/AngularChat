using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular_netCore.Models;
using Angular_netCore.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Angular_netCore.Controllers
{
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        private MyDbContext db;

        public ChatController(MyDbContext context)
        {
            db = context;
        }
        [HttpGet("[action]")]
        public IEnumerable<MessageViewModel> Message()
        {
            List<MessageViewModel> lst = (from d in db.Messages
                                          select new MessageViewModel
                                          {
                                              Id = d.Id,
                                              Nombre = d.Nombre,
                                              Text = d.Text
                                          }).ToList();

            return lst; 
        }
    }
}